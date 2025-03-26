---
layout: page
title: Assessing Vulnerability to PFAS Contamination in Michigan
description: a clustering and spatial regression analysis of PFAS contamination across Michigan
img: assets/img/pfas_cluster.jpg
redirect: 
importance: 3
category: work
---

For my Environmental Spatial Analysis course, we were tasked with coming up with a research question that utilizes some of the spatial statistical methods taught during the semester. For our project, we decided to analyze the distribution of PFAS contamination across the state of Michigan to determine where clusters of contamination may exist and which populations may be more at risk of exposure.

PFAS, as known as per- and polyfluoroalkyl substances, is a dangerous pollutant that has contaminated Michigan’s environment. Sources of PFAS are abundant, often from industrial processes and products. PFAS and its products tend to be highly resistant to environmental degradation and can leach through the hydrologic system to spread contamination. These chemicals tend to bioaccumulate through ingestion and therefore present a danger to both people and the ecosystem through water and food chains.

The State of Michigan has become a national leader in PFAS monitoring and the Michigan PFAS Action Response Team (MPART) provides this data to the public. Although recent regulations have reduced the presence of certain PFAS, regulations have mostly focused on longer chain PFAS and shorter chain PFAS continue to present a danger, as they are more easily leached.


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/pfas_cluster.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Results of the LISA analysis. High-high areas represent counties that are in a region with high PFAS contamination, and have significantly higher PFAS than their neighboring counties.
</div>

To answer our research questions, our first task was to perform a local indicator of spatial autocorrelation (LISA) analysis with a first-order queen contiguity to determine if there is a cluster of counties that have greater risk of PFAS contamination than their neighborhoring counties. Two types of PFAS-related variables were chosen and attributed to the counties: number of known sites of PFAS contamination and surface water measurements tested for PFAS concentrations. The first-order queen contiguity accounts for interactions of counties that share only a point, not a border, and ensures each county has at least one interaction.

The results of the LISA analysis showed the same clustering pattern for both variables. The counties of Monroe, Wayne, Macomb, and Lapeer, which largely overlap the Detroit metropolitan area, have the largest amount of PFAS contamination relative to their neighboring counties.

The cluster of major PFAS contamination in southeast Michigan can likely be explained with the region’s history and hydrology. Southeastern Michigan was a mecca of industry in the twentieth century, especially for automobiles, and experienced immense population growth. In recent decades, the region has economically stagnated but continues to deal with the effects of the industrial boom. The PFAS contamination may be due to the history of industry and accumulation of historic waste in landfills. Furthermore, the only Michigan counties whose watersheds flow into Lake Erie are within this contaminated cluster. The PFAS could have originated inland and leached southeast towards Lake Erie, gradually accumulating in the water table and organisms while resisting degradation.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/pfas_poster.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Poster created for the final project presentation in Environmental Spatial Data Analysis.
</div>

Finally, we ran a spatial regression analysis using Census block data within the cluster of counties. Independent variables explored included unemployment rate, poverty rate, age 65+, people without health insurance, black population, and median income. These variables were chosen because they may represent potentially vulnerable populations. After using an adjusted error model to account for spatial autocorrelation, the results showed negative correlation between PFAS concentration and two variables: people without health insurance and median income. 

Higher PFAS concentrations are more likely to be found in lower income areas, which suggests there may be some income inequalities in exposed populations. This result matches our hypothesis that vulnerable populations (e.g. lower income) are more at risk of exposure. Interestingly though, higher PFAS concentrations are also more likely to be found near populations with higher ratios of health insurance. This suggests that these populations are able to be treated for adverse health effects that may result from PFAS.