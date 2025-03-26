---
layout: page
title: Electrifying and Decarbonizing the UofM Bus Fleet
description: a multi-criteria decision analysis tool to determine the optimal mix of electric, hybrid, and diesel buses to achieve net carbon goals
img: assets/img/mcda_bus.jpg
importance: 3
category: work
---

For my Environmental Systems Analysis class, we were tasked with coming up with an example of a Multi-Criteria Decision Analysis (MCDA) tool that could be used to guide decision-making for an environmental issue of interest. We decided to use the electrification of the University of Michigan (UM) bus fleet as our example.

The UM Campus 2050 Plan states that the university aims to reach carbon neutrality by 2040. One significant contributor to campus emissions is the UM fleet of buses, which currently consists of 4 electric buses, 27 hybrid, and 29 diesel buses and emits an estimated 3 million kg CO2 eq/year. UM would need to reduce emissions by 33% over the next five years to be on track for its 2040 carbon neutrality goal.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mcda_system.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The systems of equations used for our MCDA tool.
</div>

We developed systems of equations to minimize emissions that takes into account the number of buses required to sufficiently serve existing bus routes, the current distribution of electric/hybrid/diesel buses, and the purchase and selling price of each type of bus. While the primary objective was to minimize emissions, we also had a secondary objective of minimizing cost. A full list of our methods can be found in the Final Report PDF.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mcda_pareto.jpeg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The resulting Pareto frontier of decision-making from our MCDA tool. The red point represents the solution that minimizes cost while reducing emissions by 33% by 2030.
</div>

We determined the endpoints of feasible decision space by solving for each objective separately: lowest possible cost and lowest possible emissions. We plotted a range potential decisions between these two extremes to understand the tradeoffs between each choice. By evaluating the set of non-inferior solutions that minimize both cost and emissions, we are able to present UM with options for decarbonizing their bus fleet along a spectrum with either plan at the extremes. The most likely decision to be made is the cheapest option that meets the Campus Plan 2050 goal of reducing emissions 33% over 5 years. This would result in an optimal fleet of 28 electric buses, 29 hybrid buses, and 3 diesel buses. 

Future work could factor in the timing in which the buses are purchased and sold, the fuel costs associated with each option, and the emissions impacts of an increasingly renewable electricity supply to provide UM with a more comprehensive assessment of bus fleet decarbonization options.