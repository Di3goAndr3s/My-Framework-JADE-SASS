<!DOCTYPE html>
<html ng-app="securityinafrica">

<head>
 <meta charset="utf-8">
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
 <title>Security in Africa</title>
 <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
 <meta name="description" content="">
 <meta name="viewport" content="width=device-width">
 <!-- Scripts-->
 <script src="assets/js/libs-contrib.js"></script>
 <script src="assets/js/libs-custom.js"></script>
 <script src="assets/js/main.js"></script>
 <link rel="stylesheet" href="assets/css/timeline.633fdd7a8cbe780bedb23434c948fe33.default.css">
 <!--Styles-->
 <link rel="stylesheet" href="assets/css/lib.min.css">
<!-- <link rel="stylesheet" href="assets/css/style.css">-->
 <link rel="stylesheet" href="assets/css/style.css">
<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">

</head>

<body>
 <div class="safeZone">
  <p>Safe Zone</p>
  <a href="" title="Login" class="openModallogin">
   <i class="fa fa-sign-in fa-lg"></i>
  </a>
  <a href="" title="Logout">
   <i class="fa fa-sign-out fa-lg"></i>
  </a>
  <a href="#agencyprofile" title="My Profile">
   <i class="fa fa-user fa-lg"></i>
  </a>
 </div>
 <header>
  <div>
   <a href="#"></a>
  </div>
  <div class="wrapper">

   <ul class="menu">
    <li>
     <a href="#aboutus">About us</a>
    </li>
    <li>
     <a href="#ourservices">Our Services</a>
    </li>
    <li>
     <a href="#register">Register</a>
    </li>
    <li>
     <a href="#vacancylist">Vacancy listing</a>
    </li>
    <li>
     <a href="#blog">Blog</a>
    </li>
    <li>
     <a href="#calendar">Calendar</a>
    </li>
    <li>
     <a href="#directories">directories</a>
    </li>
    <li>
     <a class="modalContact">Contact us</a>
    </li>
   </ul>
  </div>
 </header>

 <main ng-controller="LoremController" ng-view=""></main>

 <footer>
  <div class="wrapper">
   <div>
    <a href="" target="_blank">
     <i class='fa fa-twitter fa-2x'></i>
    </a>
    <a href="" target="_blank">
     <i class='fa fa-facebook fa-2x'></i>
    </a>
    <a href="" target="_blank">
     <i class='fa fa-google-plus fa-2x'></i>
    </a>
   </div>
   <div class="text-center">© 2014
    <span>security in africa</span> All rights reserved
    <br>
    <a class="openModalpolitics">Terms and conditions</a>
   </div>
   <div class="footer-ahorranito"></div>
  </div>
 </footer>
</body>

</html>
<div class="overlay"></div>
<div class="modalBoxlogin panel">
 <h1>Login</h1>
 <a href="" class="closeModalbox">
  <i class="fa fa-times fa-2x"></i>
 </a>
 <form action="" class="">
  <div class="form-group">
   <label>Email</label>
   <input placeholder="Email" type="text" class="form-control" />
  </div>
  <div class="form-group">
   <label>Password</label>
   <input placeholder="Password" type="password" class="form-control" />
  </div>
  <button type="button" class="btnYellow pull-right">Login</button>
 </form>
 <a class="openModalremember">
  <i class="fa fa-hand-o-right"></i> Remember your password</a>
  <div class="s5"></div>
 <a href="#register" class="newUser">
  <i class="fa fa-hand-o-right"></i> New User</a>

</div>
  <div class="modalBoxremember panel">
 <h1>Remember Password</h1>
 <a href="" class="closeModallogin">
  <i class="fa fa-times fa-2x"></i>
 </a>
 <div class="form-group">
   <label>Password</label>
   <input placeholder="Password" type="password" class="form-control" />
  </div>
   <button type="button" class="btnYellow pull-right">Remember</button>

  </div>


<div class="modalBox panel">
 <h1>Contact</h1>
 <div class="descriptionBox">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, nemo, totam, vero, dolor veritatis officiis quam tempore laboriosam at fugit nesciunt deserunt</p>
 </div>
 <div class="s20"></div>
 <form action="" class="contactForm">
  <a href="" class="closeModalbox">
   <i class="fa fa-times fa-2x"></i>
  </a>
  <div class="form-group">
   <label>Name</label>
   <input placeholder="Name" type="text" class="form-control" />
  </div>
  <div class="form-group">
   <label>Email</label>
   <input placeholder="Email" type="text" class="form-control" />
  </div>
  <div class="form-group">
   <label>Comments</label>
   <textarea placeholder="Comments" class="form-control"></textarea>
  </div>
  <button type="button" class="btnYellow pull-right">Contact</button>
 </form>
</div>
<div class="modalBoxpolitics panel">
 <a href="" class="closeModalbox">
  <i class="fa fa-times fa-2x"></i>
 </a>
 <h1>Terms and conditions</h1>
 <div style="overflow: auto; max-height: 36rem">
  <p>This acceptable use policy sets out the terms between you and us under which you may access our website www.developingafrica.net (our site). This acceptable use policy applies to all users of, and visitors to, our site.</p>
  <p>The aim of our project is to inject projects directly into African business communities and evince economic developments in their communities and societies. It is therefore our intention to depart from abusive and exploitative practices in Africa. As
   a result, all projects that derive their resources from Africa using our site have to demonstrate, in the spirit of our aim, tangible contributions to communities where they source the resources.</p>
  <p>Your use of our site means that you accept, and agree to abide by, all the policies in this acceptable use policy, which supplement our terms of website use. www.developingafrica.net is a site operated by Developing Africa Limited (we or us). We are
   registered in England and Wales under company number 07347704 and we have our registered office at 300 Vauxhall Bridge road, London, SW1V 1AA.</p>
  <h3>PROHIBITED USES</h3>
  <p>You may use our site only for lawful purposes. You may not use our site:</p>
  <p>• In any way that breaches any applicable local, national or international law or regulation.
   <br>• In any way that is unlawful or fraudulent, or has any unlawful or fraudulent purpose or effect.
   <br>• For the purpose of harming or attempting to harm minors in any way.
   <br>• To send, knowingly receive, upload, download, use or re-use any material which does not comply with our content standards.
   <br>• To transmit, or procure the sending of, any unsolicited or unauthorised advertising or promotional material or any other form of similar solicitation (spam).
   <br>• To knowingly transmit any data, send or upload any material that contains viruses, Trojan horses, worms, time-bombs, keystroke loggers, spyware, adware or any other harmful programs or similar computer code designed to adversely affect the operation
   of any computer software or hardware.</p>
  <p>You also agree:</p>
  <p>Not to reproduce, duplicate, copy or re-sell any part of our site in contravention of the provisions of our terms of website use.</p>
  <p>• Not to access without authority, interfere with, damage or disrupt:
   <br>• Any part of our site;
   <br>• Any equipment or network on which our site is stored;
   <br>• Any software used in the provision of our site; or
   <br>• Any equipment or network or software owned or used by any third party.</p>
  <h3>INTERACTIVE SERVICES</h3>
  <p>We may from time to time provide interactive services on our site, including, without limitation:</p>
  <p>• RSS feeds
   <br>• Chat rooms.
   <br>• Bulletin boards.
   <br>• Blogs</p>
  <p>Where we do provide any interactive service, we will provide clear information to you about the kind of service offered, if it is moderated and what form of moderation is used (including whether it is human or technical).</p>
  <p>We will do our best to assess any possible risks for users (and in particular, for children) from third parties when they use any interactive service provided on our site, and we will decide in each case whether it is appropriate to use moderation of
   the relevant service (including what kind of moderation to use) in the light of those risks. However, we are under no obligation to oversee, monitor or moderate any interactive service we provide on our site, and we expressly exclude our liability
   for any loss or damage arising from the use of any interactive service by a user in contravention of our content standards, whether the service is moderated or not.</p>
  <p>The use of any of our interactive services by a minor is subject to the consent of their parent or guardian. We advise parents who permit their children to use an interactive service that it is important that they communicate with their children about
   their safety online, as moderation is not foolproof. Minors who are using any interactive service should be made aware of the potential risks to them.</p>
  <p>Where we do moderate an interactive service, we will normally provide you with a means of contacting the moderator, should a concern or difficulty arise.</p>
  <h3>CONTENT STANDARDS</h3>
  <p>These content standards apply to any and all material which you contribute to our site (contributions), and to any interactive services associated with it. You must comply with the spirit of the following standards as well as the letter. The standards
   apply to each part of any contribution as well as to its whole.</p>
  <p>Contributions must:</p>
  <p>• Be accurate (where they state facts). Be genuinely held (where they state opinions). Comply with applicable law in the UK and in any country from which they are posted</p>
  <p>Contributions must not:
   <p>• Contain any material which is defamatory of any person.
    <br>• Contain any material which is obscene, offensive, hateful or inflammatory.
    <br>• Promote sexually explicit material.
    <br>• Promote violence.
    <br>• Promote discrimination based on race, sex, religion, nationality, disability, sexual orientation or age.
    <br>• Infringe any copyright, database right or trade mark of any other person.
    <br>• Be likely to deceive any person.
    <br>• Be made in breach of any legal duty owed to a third party, such as a contractual duty or a duty of confidence.
    <br>• Promote any illegal activity.
    <br>• Be threatening, abuse or invade another's privacy, or cause annoyance, inconvenience or needless anxiety.
    <br>• Be likely to harass, upset, embarrass, alarm or annoy any other person.
    <br>• Be used to impersonate any person, or to misrepresent your identity or affiliation with any person.
    <br>• Give the impression that they emanate from us, if this is not the case.
    <br>• Advocate, promote or assist any unlawful act such as (by way of example only) copyright infringement or computer misuse.</p>
   <h3>SUSPENSION AND TERMINATION</h3>
   <p>We will determine, in our discretion, whether there has been a breach of this acceptable use policy through your use of our site. When a breach of this policy has occurred, we may take such action as we deem appropriate.</p>
   <p>Failure to comply with this acceptable use policy constitutes a material breach of the terms of use upon which you are permitted to use our site, and may result in our taking all or any of the following actions:</p>
   <p>• Immediate, temporary or permanent withdrawal of your right to use our site.
    <br>• Immediate, temporary or permanent removal of any posting or material uploaded by you to our site.
    <br>• Issue of a warning to you.
    <br>• Legal proceedings against you for reimbursement of all costs on an indemnity basis (including, but not limited to, reasonable administrative and legal costs) resulting from the breach.
    <br>• Further legal action against you.
    <br>• Disclosure of such information to law enforcement authorities as we reasonably feel is necessary.</p>
   <p>We exclude liability for actions taken in response to breaches of this acceptable use policy. The responses described in this policy are not limited, and we may take any other action we reasonably deem appropriate.</p>
   <p>For the avoidance of doubt, breach of this acceptable use policy by paid subscribers will amount to breach of contract, following our Conditions of Sale.</p>
   <h3>CHANGES TO THE ACCEPTABLE USE POLICY</h3>
   <p>We may revise this acceptable use policy at any time by amending this page. You are expected to check this page from time to time to take notice of any changes we make, as they are legally binding on you. Some of the provisions contained in this acceptable
    use policy may also be superseded by provisions or notices published elsewhere on our site.</p>
 </div>
</div>


