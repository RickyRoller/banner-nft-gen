import * as d3 from 'd3';
import { bannerHeight, bannerWidth } from '../banner-templates/templateVars';
import { v4 } from 'uuid';
import { BaseTemplateObject, TemplateObjectTypes } from '../models/templates';
import { ControlTypes } from '../models/controls';

export const initGen1 = (id: string): BaseTemplateObject => ({
  type: TemplateObjectTypes.GEN_1,
  id,
  title: 'Generative Background',
  controls: [
    {
      type: ControlTypes.RandGen,
      title: 'Regenerate',
      objectId: id,
      property: 'regenId',
      default: v4(),
    },
  ],
});

let genSeed = '';

export const renderGen1 = (svgNode: SVGSVGElement, seed: string) => {
  // Only regenerate if we have a new seed
  if (genSeed !== seed) {
    genSeed = seed;
  } else {
    return;
  }

  const svg = d3.select(svgNode);
  let baseNode: any = svg.select('.gen1');
  if (baseNode.nodes().length === 0)
    baseNode = svg.append('g').classed('gen1', true);
  baseNode.node().innerHTML = '';
  const data = { name: 'base', children: genData() };
  const root = treemap(data);

  const bgDataMid = {
    ...data,
    children: data.children.map((d: any) => ({
      ...d,
      children: d.children.map((z: any) => ({
        ...z,
        children: [{ name: z.name, value: 1 }],
      })),
    })),
  };

  let bgDataLarge = {
    ...bgDataMid,
    children: bgDataMid.children.map((d: any) => ({
      ...d,
      children: [{ name: d.name, value: d.children.length }],
    })),
  };
  genBackgrounds(baseNode, treemap(bgDataLarge), 'large');
  genBackgrounds(baseNode, treemap(bgDataMid), 'mid');

  const newLayer = genLayer(baseNode, root);
  const layerCount = d3.randomInt(3, 7);
  const layers = Array.from({ length: layerCount() }, () => undefined);
  opacityScale.domain([0, layers.length - 1]);

  for (let i = 0; i < layers.length - 1; ++i) {
    newLayer(i);
  }
};

const genBackgrounds = (svg: any, root: any, id: string) => {
  const leaf = svg
    .selectAll(`g[class*="background${id}_"]`)
    .data(root.leaves())
    .join('g')
    .attr('transform', (d: any) => `translate(${d.x0},${d.y0})`)
    .attr('class', (d: any, i: number) => `background${id}_${i}`);

  // leaf.append("rect")
  //     .attr("fill", d => { while (d.depth > 1) d = d.parent; return backgroundColors(d.data.name); })
  //     .style('opacity', 0.5)
  //     .attr("width", d => d.x1 - d.x0)
  //     .attr("height", d => d.y1 - d.y0);

  const configInd = Math.round(d3.randomUniform(0, 1)());
  const configs = [
    [genPolygon(0), genPolygon(3)],
    [genPolygon(1), genPolygon(2)],
  ];
  const randConfig = configs[configInd];

  leaf
    .append('polygon')
    .attr('points', randConfig[0])
    .attr('fill', randColor)
    .style('opacity', 0.8);

  leaf
    .append('polygon')
    .attr('points', randConfig[1])
    .attr('fill', randColor)
    .style('opacity', 0.8);
};

const genLayer = (svg: any, root: any) => (id: number) => {
  const leaf = svg
    .selectAll(`g[class*="${id}_"]`)
    .data(root.leaves())
    .join('g')
    .attr('transform', (d: any) => `translate(${d.x0},${d.y0})`)
    .attr('class', (d: any, i: number) => `${id}_${i}`);

  leaf
    .append('rect')
    .attr('id', (d: any) => (d.leafUid = v4()))
    .attr('fill', 'transparent')
    .attr('width', (d: any) => d.x1 - d.x0)
    .attr('height', (d: any) => d.y1 - d.y0);

  leaf
    .append('polygon')
    .attr('points', genPolygon())
    .attr('fill', randColor)
    // .attr('strokeWidth',  d3.randomInt(0, 1))
    // .attr('stroke', '#333')
    .style('opacity', opacityScale(id));

  leaf
    .append('clipPath')
    .attr('id', (d: any) => (d.clipUid = v4()))
    .append('use')
    .attr('xlink:href', (d: any) => d.leafUid.href);
};

const genPolygon = (override?: number) => (d: any) => {
  const width = d.x1 - d.x0;
  const height = d.y1 - d.y0;
  const size = width > height ? height : width;

  const randCorner = d3.randomUniform(0, 3);
  const index = Math.round(randCorner());

  const triangles = [
    `0,0 0,${size} ${size},0`,
    `${width - size},0 ${width},0 ${width},${size}`,
    `0,${height - size} 0,${height} ${size},${height}`,
    `${width - size},${height} ${width},${height} ${width},${height - size}`,
  ];

  return triangles[override ?? index];
};

const genData = () => {
  const layerRanges = [
    d3.randomInt(1, 10),
    d3.randomInt(1, 18),
    d3.randomInt(1, 6),
  ];

  const data = Array.from({ length: layerRanges[0]() }, () => undefined);

  const genCell = (layer: number): { name: string; children: any[] } => {
    const childrenBase = Array.from(
      { length: layerRanges[layer]() },
      () => undefined,
    );
    let children;
    if (layer === 2) {
      children = childrenBase.map((d: any, i: number) => ({
        name: `${layer}_${i}`,
        value: 1,
      }));
    } else {
      children = childrenBase.map(() => genCell(layer + 1));
    }

    return {
      name: `${layer}`,
      children,
    };
  };

  return data.map(() => genCell(1), {});
};

const randColor = () => {
  const index = d3.randomInt(0, color.range().length - 1)();
  return color(`${index}`);
};

const treemap = (data: any) =>
  d3
    .treemap()
    .tile(d3.treemapSquarify)
    .padding(1)
    .size([bannerWidth, bannerHeight])
    .round(true)(
    d3
      .hierarchy(data)
      .sum((d: any) => d.value)
      .sort((a, b) => (b.value ?? 0) - (a.value ?? 0)),
  );

const opacityScale = d3.scaleLinear().range([0.4, 1]);
const color = d3
  .scaleOrdinal()
  .domain(['0', '1', '2', '3', '4'])
  .range(['#bffff1', '#7cffcb', '#74f2ce', '#379634', '#0a3200']);
