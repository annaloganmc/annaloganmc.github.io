---
layout: page
title: Supervised Pixel-Based Land Cover Classification
description: performing a land cover classification for Saginaw Woods using remote sensing and field data
img: assets/img/sagwoods_plygn.jpg
importance: 3
category: work
---

As part of my field remote sensing course, I learned how to perform a supervised pixel-based land cover classification using a study area of Saginaw Woods, Michigan. We had two field survey days where we walked around the property and recorded ground-truthing points for various land cover types, such as deciduous/coniferous forests, wetlands, and developed land.

Based off the collected field data and 2022 NAIP imagery for the study area, I created training sample polygons that represented each level 1 land use land cover code. Using the Image Classification Wizard in ArcGIS Pro, I created a classification schema and ran a Random Trees classifier that produced a pixel-based land cover classification map.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sagwoods_plygn.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Training sample polygons drawn for classification, shown in purple.
</div>

To assess the accuracy of the classification, I used a confusion matrix. The method resulted in a user accuracy of 92% and a producer accuracy of 88%. For improved classification, I would collect better validation and sampling points.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/sagwoods_lc.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Resulting classified land cover raster for Saginaw Woods.
</div>