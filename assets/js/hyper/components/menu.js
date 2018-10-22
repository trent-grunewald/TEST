import {h, app} from 'hyperapp'

export default function Menu({state, actions}) {
  return (
    <section id="menu" class="menu hidden">
     <div class="reservation-overlay"></div>
     <div class="container menu-body">
      <h1 class="restName">Over-Seasoned</h1>
      <a><i id="close-menu" class="fas fa-times"></i></a>
      <h2 class="menu_logo"></h2>
      <div class="menu_section menu_section_15386190772">
      <h3>Appetizers</h3>
						<div class="menu_item menu_item_15386190982">
							<h4 class="item--name">Skins</h4>
							<span class="price">$12.99</span>
							<p class="description">Sun dried, hand cut, skins.</p>
							<hr/>
						</div>
					
						<div class="menu_item menu_item_15386191426">
							<h4 class="item--name">Deep Fried Pee Pods</h4>
							<span class="price">$8.99</span>
							<p class="description">Deep fried in our hand crafted batter, delicious!</p>
							<hr/>
						</div>
					
						<div class="menu_item menu_item_15386191997">
							<h4 class="item--name">Finger-Eaters</h4>
							<span class="price">$16.99</span>
							<p class="description">These delicious small meat bites are a fan favorite, tastes just like chicken!</p>
							<hr/>
						</div>
					
						<div class="menu_item menu_item_15386196829">
							<h4 class="item--name">Armadillo</h4>
							<span class="price">$22</span>
							<p class="description">Shredded, smoked armadillo mixed with garlic and Gouda cheese, delicious!</p>
							<hr/>
						</div>
					</div>
          <div class="menu_section menu_section_15386193034">
          <h3>Steaks</h3>
						<div class="menu_item menu_item_15386193111">
							<h4 class="item--name">Grilled NY Strip</h4>
							<span class="price">$32</span>
							<p class="description">A fresh, barely 9oz NY Strip, served with half an asparagus and 1/16 of a potato.</p>
							<hr/>
						</div>
					
						<div class="menu_item menu_item_15386193127">
							<h4 class="item--name">Charbroiled T-Bone</h4>
							<span class="price">$52</span>
							<p class="description">An over-charred T-Bone with dry leaves from a nearby tree sprinkled on top.</p>
							<hr/>
						</div>
					
						<div class="menu_item menu_item_15386193137">
							<h4 class="item--name">Steamed Ribeye</h4>
							<span class="price">$72</span>
							<p class="description">A delicious 16oz Rib eye, dowsed in seasonings, you will need water.</p>
							<hr/>
						</div>
					
						<div class="menu_item menu_item_15386193146">
							<h4 class="item--name">Porterhouse</h4>
							<span class="price">$47</span>
							<p class="description">A juicy 14oz Porterhouse, by far one of our most popular steaks available.</p>
							<hr/>
						</div>
					
						<div class="menu_item menu_item_15386195256">
							<h4 class="item--name">Top Sirloin</h4>
							<span class="price">$92</span>
							<p class="description">A delicious 24oz Top Sirloin, this thing is juicy! Comes as is, no special orders.</p>
							<hr/>
						</div>
					
						<div class="menu_item menu_item_15386195279">
							<h4 class="item--name">Filet Mignon</h4>
							<span class="price">$47</span>
							<p class="description">10oz A well seasoned and month long aged cut that might just bring you back tomorrow.</p>
							<hr/>
						</div>
					</div>
          <div class="menu_section menu_section_15386195899">
          <h3>Sides</h3>
						<div class="menu_item menu_item_15386195966">
							<h4 class="item--name">Green Beans</h4>
							<span class="price">$7.99</span>
							<p class="description">Lightly salted, seared to perfection</p>
							<hr/>
						</div>
					
						<div class="menu_item menu_item_15386197901">
							<h4 class="item--name">Cheese wheel</h4>
							<span class="price">$432.99</span>
							<p class="description">A full size, white cheddar cheese wheel.</p>
							<hr/>
						</div>
					
						<div class="menu_item menu_item_15386198239">
							<h4 class="item--name">Drayton's Chili</h4>
							<span class="price">$14.99</span>
							<p class="description">A two time award-winning chili, watch out for peppercorns!</p>
							<hr/>
						</div>
					</div>
          <div class="menu_section menu_section_15386200957">
          <h3>Drinks</h3>
						<div class="menu_item menu_item_15386201010">
							<h4 class="item--name">Red Wine</h4>
							<span class="price">$14.99</span>
							<p class="description">Our own house brand.</p>
							<hr/>
						</div>
					
						<div class="menu_item menu_item_15386201238">
							<h4 class="item--name">Black Eye Whiskey</h4>
							<span class="price">$7.99</span>
							<p class="description">Distilled in the Black Eyed hills of Louisiana.</p>
							<hr/>
						</div>
					
						<div class="menu_item menu_item_15386201921">
							<h4 class="item--name">The Red Raven</h4>
							<span class="price">$12.99</span>
							<p class="description">Our own mixture containing Gin, Code Red and another secret ingredient.</p>
							<hr/>
						</div>
					
						<div class="menu_item menu_item_15386202849">
							<h4 class="item--name">Coffee</h4>
							<span class="price">$2.99</span>
							<p class="description">Just brewed a fresh pot!</p>
							<hr/>
						</div>
					</div>
          <footer class="warning">*Consuming raw or undercooked meats, poultry, seafood, shellfish, eggs or unpasteurized milk may increase your risk of foodborne illness.</footer>
          </div>
    </section>
  )

}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>