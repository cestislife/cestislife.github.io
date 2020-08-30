# Rock Gardens 101

<head>
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@cestislife"/>
    <meta name="twitter:title" content="cestislife's Rock Garden 101"/>
    <meta name="twitter:image" content="https://cestislife.github.io/card.png"/>
</head>

## Navigation
> * [Rock Spawn Conditions](#rock-spawn-conditions)   
> * [Blockers](#blockers)   
> * [Tall Furniture](#tall-furniture)  


## Rock Spawn Conditions
* Rocks may **only** spawn on grass and any diggable paths such as the dirt path, dark dirt path, and sand path.
* Rocks cannot spawn on non-diggable paths, custom designs, the beach, and any other location with spawn condition not met.
* Rocks can be blocked from spawning if it is within a blocker’s range. 
* A rock’s required spawn area, can overlap another rock’s required spawn area, as such, the minimum distance between rocks is 1 tile. 

## Blockers
In order to force a rock to spawn where we want, we employ the use of blockers to prevent them spawning in places that we don’t want them to.

There are three main classes of blockers, that is:   
❶ [Single blocker](#single-blockers)   
❷ [Perimeter blocker](#perimeter-blockers)   
❸ [Obstruction blocker](#obstruction-blockers)       

### Single Blockers
These will only block their own tile. These blockers are typically those without a hitbox.

Examples include:
> * Dropped items
> * Flowers and weeds
> * Placed custom designs (on the ground)
> * Placed non-diggable paths
> * Dig spots

### Perimeter Blockers
Natural blockers (beach, water, cliffs), furniture or placed items typically only block a perimeter of ① tile around the tiles they occupy. Generally, anything with a hitbox will be perimeter blockers. “Tall” furniture will be discussed in their own dedicated section.

Examples include:
> * Tiles adjacent to beach, water tiles, and cliff edges
> * Fences and placed items
> * Placed custom designs (mannequins & easels)
> * Placed furniture (exceptions being “tall” furniture)
> * Shrubs

### Obstruction Blockers
“Tall” furniture or structures will block several tiles  (depends on height) behind the tiles they occupy as well as their perimeter. They could also block across multiple cliff levels.

Examples include:
> * Cliffs
> * Buildings (incl. inclines and bridges)
> * Trees*
> * Placed “tall” furniture

## Tall Furniture
Furniture have height values and with this, it determines how far north a certain furniture will block rocks from spawning. A list of the furniture heights can be found [here](https://bit.ly/3hGAbli). Generally:

<table class="tg">
<thead>
  <tr>
    <th class="tg-c3ow">Height Value</th>
    <th class="tg-c3ow">Tiles Blocked</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-c3ow">≥ 20</td>
    <td class="tg-c3ow">4</td>
  </tr>
  <tr>
    <td class="tg-c3ow">≥ 16</td>
    <td class="tg-c3ow">3</td>
  </tr>
  <tr>
    <td class="tg-c3ow">≥ 12</td>
    <td class="tg-c3ow">2</td>
  </tr>
  <tr>
    <td class="tg-c3ow">≥ 8</td>
    <td class="tg-c3ow">1</td>
  </tr>
</tbody>
</table>

### Trees
Trees are also considered "tall furniture", but only block **3 tiles north** of them. An exception to this is the **cedar** tree, where it blocks **4 tiles north** instead. 

Trees present another unique rule where they can also block an area of 3 tiles horizontally, 2 tiles north of their occupying tile. The illustration below compares the difference between cedar trees and other trees. 

[⬅️ Back To Main Page](https://cestislife.github.io)

***

#### Credits
> Testing & information: nomiko#0644, Zertolurian#9617   
> Special thanks: [@B19F00T](https://twitter.com/b19f00t), Waterjar#2219, asteriation#6884, Ketama#9570  
> Assets extracted by: Alexis#8717   
> Guide by: [@cestislife](https://twitter.com/cestislife)
