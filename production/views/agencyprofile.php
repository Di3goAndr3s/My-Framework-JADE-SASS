<section class="wrapper agencyprofile">
 <h1>agency profile</h1>
 <div class="descriptionBox">
  <p>{{lorem | cut:true:480:'...'}}</p>
 </div>
 <div class="s40"></div>
 <img ph-img="400x280" />
 <div class="profileItems">
  <label class="labelProfile">Organization name:</label>
  <div editable-text="user.name" title="Click for edit" e-placeholder="Organization name">{{ user.name || 'Please write your Organization name' }}</div>
  <div class="clear e40"></div>
  <label class="labelProfile">E-mail:</label>
  <div editable-text="user.email" title="Click for edit">{{ user.email || 'Please write your E-mail' }}</div>
  <div class="clear e40"></div>
  <label class="labelProfile">Telephone:</label>
  <div editable-text="user.telephone" title="Click for edit">{{ user.telephone || 'Please write your Telephone' }}</div>
  <div class="clear e40"></div>
  <label class="labelProfile">Web site:</label>
  <div editable-url="user.website" title="Click for edit">{{ user.website || 'Please write your Web site' }}</div>
  <div class="clear e40"></div>
  <label class="labelProfile">Twitter:</label>
  <div editable-text="user.twitter" title="Click for edit">{{ user.twitter || 'Please write your Twitter' }}</div>
  <div class="clear e40"></div>
  <label class="labelProfile">Zip code:</label>
  <div editable-text="user.zipcode" title="Click for edit">{{ user.zipcode || 'Please write your Zip code' }}</div>
  <div class="clear e40"></div>
 </div>
 <div class="profileItemslarge">
  <label class="labelProfile">Description:</label>
  <div editable-textarea="user.description" title="Click for edit">{{ user.description || 'Please write your Description' }}</div>
  <div class="clear e40"></div>
  <label class="labelProfile">Documents:</label>
  <div title="Click for edit" class="linkDocuments">
   <a href="#" target="_blank">
    <i class="fa fa-bookmark"></i>{{lorem | cut:true:80:'...'}}</a>
   <a href="#" target="_blank">
    <i class="fa fa-bookmark"></i>{{lorem | cut:true:80:'...'}}</a>
   <a href="#" target="_blank">
    <i class="fa fa-bookmark"></i>{{lorem | cut:true:80:'...'}}</a>
   <a href="#" target="_blank">
    <i class="fa fa-bookmark"></i>{{lorem | cut:true:120:'...'}}</a>
   <div class="clear"></div>
   <input type="file" multiple="multiple" />
  </div>
 </div>
 <div class="s40 clear"></div>
 <div class="contentDirectory">
  <div class="sliderBox">
   <ul class="bxslider">
    <li>
     <img ph-img="460x320" />
    </li>
    <li>
     <img ph-img="460x320" />
    </li>
    <li>
     <img ph-img="460x320" />
    </li>
   </ul>
  </div>
  <div class="contentBox">
   <h2>{{lorem | cut:true:80:'...'}}</h2>
   <p>{{lorem | cut:true:480:'...'}}</p>
   <p>{{lorem | cut:true:280:'...'}}</p>
   <div class="s20"></div>
   <h3>Documents</h3>
   <div class="s20"></div>
   <a>{{lorem | cut:true:80:'...'}}</a>
   <a>{{lorem | cut:true:80:'...'}}</a>
  </div>
  <div class="s20 clear"></div>
  <div class="profileTabs">
   <ul>
    <li>
     <a href="#content1">
      <span>Projects</span>
     </a>
    </li>
    <li>
     <a href="#content2">
      <span>Products</span>
     </a>
    </li>
    <li>
     <a href="#content3">
      <span>Services</span>
     </a>
    </li>
    <li>
     <a href="#content4">
      <span>Vacancies</span>
     </a>
    </li>
   </ul>
   <div id="content1">
    <div>
     <img ph-img="380x240" />
     <div class="s20"></div>
     <p>{{lorem | cut:true:280:'...'}}</p>
     <a class="openModalprofile btnYellow text-center">see more</a>
    </div>
    <div>
     <img ph-img="380x240" />
     <div class="s20"></div>
     <p>{{lorem | cut:true:280:'...'}}</p>
     <a class="openModalprofile btnYellow text-center">see more</a>
    </div>
    <div>
     <img ph-img="380x240" />
     <div class="s20"></div>
     <p>{{lorem | cut:true:280:'...'}}</p>
     <a class="openModalprofile btnYellow text-center">see more</a>
    </div>
   </div>
   <div id="content2">
    <div>
     <img ph-img="380x240" />
     <div class="s20"></div>
     <p>{{lorem | cut:true:280:'...'}}</p>
     <a class="openModalprofile btnYellow text-center">see more</a>
    </div>
    <div>
     <img ph-img="380x240" />
     <div class="s20"></div>
     <p>{{lorem | cut:true:280:'...'}}</p>
     <a class="openModalprofile btnYellow text-center">see more</a>
    </div>
    <div>
     <img ph-img="380x240" />
     <div class="s20"></div>
     <p>{{lorem | cut:true:280:'...'}}</p>
     <a class="openModalprofile btnYellow text-center">see more</a>
    </div>
   </div>
   <div id="content3">
    <div>
     <img ph-img="380x240" />
     <div class="s20"></div>
     <p>{{lorem | cut:true:280:'...'}}</p>
     <a class="openModalprofile btnYellow text-center">see more</a>
    </div>
    <div>
     <img ph-img="380x240" />
     <div class="s20"></div>
     <p>{{lorem | cut:true:280:'...'}}</p>
     <a class="openModalprofile btnYellow text-center">see more</a>
    </div>
    <div>
     <img ph-img="380x240" />
     <div class="s20"></div>
     <p>{{lorem | cut:true:280:'...'}}</p>
     <a class="openModalprofile btnYellow text-center">see more</a>
    </div>
   </div>
   <div id="content4">
    <div>
     <img ph-img="380x240" />
     <div class="s20"></div>
     <p>{{lorem | cut:true:280:'...'}}</p>
     <a class="openModalprofile btnYellow text-center">see more</a>
    </div>
    <div>
     <img ph-img="380x240" />
     <div class="s20"></div>
     <p>{{lorem | cut:true:280:'...'}}</p>
     <a class="openModalprofile btnYellow text-center">see more</a>
    </div>
    <div>
     <img ph-img="380x240" />
     <div class="s20"></div>
     <p>{{lorem | cut:true:280:'...'}}</p>
     <a class="openModalprofile btnYellow text-center">see more</a>
    </div>
   </div>
  </div>
 </div>
</section>
<div class="modalBoxprofile panel">
 <a href="" class="closeModalbox">
  <i class="fa fa-times fa-2x"></i>
 </a>
 <h2>{{lorem | cut:true:80:'...'}}</h2>
 <div class="sliderBox">
  <ul class="bxslider">
   <li>
    <img ph-img="400x240" />
   </li>
   <li>
    <img ph-img="400x240" />
   </li>
   <li>
    <img ph-img="400x240" />
   </li>
  </ul>
 </div>
 <p>{{lorem | cut:true:280:'...'}}</p>
 <p>{{lorem | cut:true:280:'...'}}</p>
 <div class=" clear"></div>
 <label class="labelProfile">Documents:</label>
 <a href="#" target="_blank">
  <i class="fa fa-bookmark"></i>{{lorem | cut:true:80:'...'}}</a>
 <a href="#" target="_blank">
  <i class="fa fa-bookmark"></i>{{lorem | cut:true:80:'...'}}</a>
 <div class="clear"></div>
</div>
<?php include( "llamados.php"); ?>
