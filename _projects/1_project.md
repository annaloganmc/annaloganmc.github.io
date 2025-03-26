---
layout: page
title: Ashleyville Salt Marsh Restoration
description: Semi-automated tidal creek parameter extraction algorithm.
img: assets/img/av.jpg
importance: 2
category: work
related_publications: false
---

This work was conducted as part of a larger project led by the South Carolina Department of Natural Resources to restore 7 acres of salt marsh in the Ashleyville area of Charleston, South Carolina. During my internship with Robinson Design Engineers, I utilized a semi-automated tidal creek extraction algorithm to calculate quantitative parameters about the restoration site and reference tidal creek systems to guide the project design. 


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/otc_ws.jpg" title="Old Town Creek Watershed" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Extent of the Old Town Creek tidal watershed within Charleston, South Carolina.
</div>

The restoration site is located in the Maryville region: one of the most historically prominent African American towns seen as a model of Black self-government. Ashleyville is the area of Maryville that is closest to the Ashley River. The community was established by former slaves and their descendants to establish property and businesses in the Jim Crow-era South.

The project came about from a citizen science program where community members were encouraged to document changes in sea level and pollution in the marshes of Charleston. Through this initiative, one of the residents of Maryville brought attention to the marsh die-off occuring in his backyard. From their, the community rallied collaborators to tackle the restoration of this degraded marsh.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/av_opl.jpg" title="Ashleyville OPL" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Overmarsh path length (OPL) algorithm output for the Ashleyville restoration site.
</div>

For this phase of the project, I was tasked with finding metrics that could be calculated for the restoration site and various tidal creek reference systems to help guide the restoration strategy. 

One of these metrics is overmarsh path length (OPL), which represents the distance a particle of water on the marsh platform travels before reaching a channel. The lower the mean OPL, the better irrigated the site is by a dense and well-distributed creek system. Marshes with more efficient tidal channel networks have lower mean OPL.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/otc_creekorder.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/otc_ndvi.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Examples of some of the parameters calculated for the Old Towne Creek tidal creek system.
</div>

The creek extraction algorithm I used has the capability of extracting a comprehensive suite of morphological creek characteristics in both mature and created salt marshes using only LiDAR data. By using slope and elevation thresholds to determine the creek area, the algorithm calculates amplitude, channel length, sinuosity ratio, junction angle, width, depth, cross-sectional area, creek order, bifurcation ratio, drainage density, and overmarsh path length. The results were found to closely match field-validated results, and were significantly faster and less subjective to produce. 

To monitor salt marsh vegetation health, a critical factor in determining the extent of marsh die-back, the Normalized Difference Vegetation Index (NDVI) can be utilized. NDVI quantifies the greenness of an area using remote sensing imagery with red and near-infrared bands and has a well-established relationship with vegetation productivity.

Salt marshes are often difficult to access for field surveys due to the thick mud and constantly changing water levels from the tides. Therefore, these remote sensing methods have great potential for cost-effective long-term monitoring of creek morphological evolution and vegetation health in both mature and managed salt marshes.

