const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export type Project = {
  id: string;
  lab: string;
  title: string;
  dateLabel: string;
  description: string;
  skills: string[];
  previewImage: string;
  downloadUrl: string;
  sourceFile: string;
};

export const projects: Project[] = [
  {
    id: 'bike-access-schools',
    lab: 'Lab 1',
    title: 'Bike Access and Large School Enrollment in Philadelphia',
    dateLabel: 'Spring 2025',
    description:
      'Mapped Philadelphia schools with enrollment of at least 1,200 students that are within 0.1 mile of the bike network, then summarized the neighborhoods represented.',
    skills: ['ArcGIS', 'attribute filtering', 'proximity analysis', 'map layout', 'Philadelphia GIS layers'],
    previewImage: asset('assets/previews/lab-1-introduction-to-arcgis.webp'),
    downloadUrl: asset('assets/downloads/lab-1-introduction-to-arcgis.pdf'),
    sourceFile: 'GIS - Lab 1 - SHJ.pdf',
  },
  {
    id: 'coordinate-systems',
    lab: 'Lab 2',
    title: 'Coordinate Systems and Projection Comparison',
    dateLabel: 'Spring 2025',
    description:
      'Compared area measurements for Philadelphia across coordinate reference systems and reviewed global projection tradeoffs using map layouts.',
    skills: ['coordinate systems', 'map projections', 'area measurement', 'spatial accuracy', 'map comparison'],
    previewImage: asset('assets/previews/lab-2-projections-coordinate-systems.webp'),
    downloadUrl: asset('assets/downloads/lab-2-projections-coordinate-systems.pdf'),
    sourceFile: 'GIS - Lab 2.pdf',
  },
  {
    id: 'hispanic-population',
    lab: 'Lab 3',
    title: 'Hispanic Population Distribution in the Contiguous U.S.',
    dateLabel: 'Spring 2025',
    description:
      'Used 2010 Census variables to visualize Hispanic population patterns with dot distribution, graduated color, percentage, and chart-based maps.',
    skills: ['2010 Census data', 'choropleth mapping', 'dot distribution', 'chart symbols', 'attribute fields'],
    previewImage: asset('assets/previews/lab-3-hispanic-population-distribution.webp'),
    downloadUrl: asset('assets/downloads/lab-3-hispanic-population-distribution.pdf'),
    sourceFile: 'GIS - Lab 3 Report (Combined).pdf',
  },
  {
    id: 'chicago-crime-airbnb',
    lab: 'Lab 4',
    title: 'Chicago Crime and Airbnb Spatial Patterns',
    dateLabel: 'Spring 2025',
    description:
      'Mapped homicide density, Airbnb review activity, average prices, and room-type ratios by Chicago police district to compare tourism and public-safety patterns.',
    skills: ['spatial joins', 'summary statistics', 'choropleth maps', 'graduated symbols', 'attribute joins'],
    previewImage: asset('assets/previews/lab-4-chicago-crime-airbnb-analysis.webp'),
    downloadUrl: asset('assets/downloads/lab-4-chicago-crime-airbnb-analysis.pdf'),
    sourceFile: 'GIS - LAB 4 (SHJ).pdf',
  },
  {
    id: 'great-salt-lake',
    lab: 'Lab 5',
    title: 'Great Salt Lake Boundary Change Analysis',
    dateLabel: 'Spring 2025',
    description:
      'Digitized lake boundaries and compared satellite-era lake extent changes, including area calculations and KML conversion.',
    skills: ['digitizing', 'shapefiles', 'KML export', 'area calculation', 'satellite imagery interpretation'],
    previewImage: asset('assets/previews/lab-5-great-salt-lake-boundary-change.webp'),
    downloadUrl: asset('assets/downloads/lab-5-great-salt-lake-boundary-change.pdf'),
    sourceFile: 'GIS - LAB 5 - SHJ.pdf',
  },
  {
    id: 'healthy-food-site-selection',
    lab: 'Lab 6',
    title: 'Healthy Food Store Site Selection in Philadelphia',
    dateLabel: 'Spring 2025',
    description:
      'Built inclusive and exclusive location criteria to identify candidate areas for healthy food store placement in Philadelphia.',
    skills: ['site suitability', 'buffer analysis', 'erase overlay', 'calculate geometry', 'Philadelphia data layers'],
    previewImage: asset('assets/previews/lab-6-healthy-food-store-site-selection.webp'),
    downloadUrl: asset('assets/downloads/lab-6-healthy-food-store-site-selection.pdf'),
    sourceFile: 'GIS - LAB 6 (all).pdf',
  },
  {
    id: 'raster-operations',
    lab: 'Lab 7',
    title: 'Raster Operations and Terrain Analysis',
    dateLabel: 'Spring 2025',
    description:
      'Worked with NLCD land cover and elevation rasters to calculate urban area, derive terrain products, reclassify layers, and apply zonal statistics.',
    skills: ['raster analysis', 'NLCD land cover', 'slope', 'hillshade', 'zonal statistics'],
    previewImage: asset('assets/previews/lab-7-raster-operations.webp'),
    downloadUrl: asset('assets/downloads/lab-7-raster-operations.pdf'),
    sourceFile: 'GIS-Lab7-ROA.pdf',
  },
  {
    id: 'vicuna-habitat',
    lab: 'Lab 8',
    title: 'Theoretical Vicuña Habitat Suitability Map',
    dateLabel: 'Spring 2025',
    description:
      'Combined elevation, precipitation, temperature, and NDVI raster criteria to estimate suitable vicuña habitat across South America.',
    skills: ['habitat suitability', 'raster criteria', 'NDVI', 'zonal statistics', 'map interpretation'],
    previewImage: asset('assets/previews/lab-8-vicuna-habitat-suitability.webp'),
    downloadUrl: asset('assets/downloads/lab-8-vicuna-habitat-suitability.pdf'),
    sourceFile: 'GUS-3062 LAB 8.pdf',
  },
];

export const portfolioSkills = [
  {
    title: 'ArcGIS and GIS Coursework',
    evidence: 'Temple University lab reports use ArcGIS/ArcGIS Pro workflows across vector, raster, and layout tasks.',
  },
  {
    title: 'Map Creation and Layout',
    evidence: 'Labs include finished map layouts for Philadelphia, the contiguous U.S., Chicago, Utah, Boise, and South America.',
  },
  {
    title: 'Spatial Data Layers and Attributes',
    evidence: 'Reports reference attribute tables, joins, field calculations, Census variables, school layers, and district boundaries.',
  },
  {
    title: 'Coordinate Systems and Projections',
    evidence: 'Lab 2 compares Philadelphia area measurements across CRS choices and reviews global projection tradeoffs.',
  },
  {
    title: 'Basic Spatial Analysis',
    evidence: 'Supported by proximity analysis, buffers, erase overlays, summary statistics, site selection, and area calculations.',
  },
  {
    title: 'Raster Analysis',
    evidence: 'Labs 7 and 8 cover raster land cover, terrain functions, reclassification, NDVI criteria, and zonal statistics.',
  },
];
