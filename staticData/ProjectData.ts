export interface Project{
    slug: string;
    title: string;
    shortDesc : string;
    imgSrcPath : string;
    sections : ProjectSection[]
}

interface ProjectSection {
    sectionTitle : string,
    paragraphs : string[]
}

export const Projects : Project[] =
[
	{
		"slug": "EducationRetailer",
		"title": "Web platform for a education course retailer",
		"shortDesc": "Development of a web platform using .Net Core and Vue.js for a education retailer with the goal of providing access to a hight number of education courses and information about them to potential costumers.",
		"imgSrcPath": "/books.webp",
		"sections": [
			{
				"sectionTitle": "Project Scope",
				"paragraphs": [
					"This web platform was developed for education course retailer in the netherlands with the goal of providing information about the courses available in multiple education retailers.",
					"In addition to being the online catalog for the courses available in multiple retailers, the web platform was also responsible for enabling CMS management of the information displayed on the web pages for each retailer and communicating with internal systems do dynamically provide accurate information about pricing and enrollment possibilities."
				]
			},
			{
				"sectionTitle": "Technology Stack",
				"paragraphs": [
					"This web platform was developed using .Net Core and Vue.js, leveraging a Kentico CMS and multiple Azure cloud products, such as Service Fabric, Storage and Search services among others."
				]
			},
			{
				"sectionTitle": "Roles",
				"paragraphs": [
					"In this project I had the opportunity of being part of an Agile development lifecycle, delivering incremental improvements/features to the platform.",
					"As a developer I was able to work across all layers of the application being involved in the Vue.js front-end app as well as the multiple back-end services and API's developed with the .Net Core stack."
				]
			},
			{
				"sectionTitle": "Challenges",
				"paragraphs": [
					"This project was my first interaction with Vue.js and the Azure cloud services/infrastructure which in of itself was a fun challenge since it allowed me to learn both of these technologies on the job.",
					"In addition to that the fact that most features developed had to be implemented in a way that would be generic enough to be usable across the multiple retailers that used the platform forced us to always rethink the first approach that was proposed in order to reach a more elegant and future proof solution."
				]
			}
		]
	},
	{
		"slug": "InvestmentPlatform",
		"title": "Financial investment web application",
		"shortDesc": "Fullstack development of a financial investment advisory web platform for a bank, with the main goal of simplifying the process of creating and finalizing investment proposals for both the client and account manager.",
		"imgSrcPath": "/investment.webp",
		"sections": [
			{
				"sectionTitle": "Project Scope",
				"paragraphs": [
					"This applications was developed for a bank and the goal was to create a modern web platform that would allow the account managers to create investment proposals for their clients in a simpler and faster way then what was available before.",
					"In addition to create, detail, and send the investment proposals the platform would also allow the users to accept said proposals by generating all the necessary documentation and integrating with the banks existing website where the users could sign the documentation.",
					"Once the process was reviewed by the client and manager, the application would then communicate with the banks systems and issue the buy/sell orders for the products that composed the proposal."
				]
			},
			{
				"sectionTitle": "Technology Stack",
				"paragraphs": [
					"This web application was developed using C# and ASP.NET MVC5 using a IBM DB2 database as support."
				]
			},
			{
				"sectionTitle": "Roles",
				"paragraphs": [
					"In this project i was part of a team of 5 developers and was involved in all the phases of the applications lifecycle from start to handover.",
					"As a developer i worked on all the layers of the applications, front-end and back-end, implementing the business logic needed into our application as well as creating scheduled services to issue/cancel the investment orders when requirements were met."
				]
			},
			{
				"sectionTitle": "Challenges",
				"paragraphs": [
					"During the project one of the challenges we faced was the fact that although there were already some API's available that would provide client, account and product information, they were handled by different teams and sectors of the bank, consuming this information would mean that we had to manage multiple calls with extremely different inputs in order to aggregate this information.",
					"In order to mitigate the cost of getting this information that would be used multiple times during one investment process, we had to in some cases create and expose methods in our API that would collect and aggregate this information in the simplest and fastest way possible."
				]
			}
		]
	},
	{
		"slug": "FormPlatform",
		"title": "Dynamic configurable form collection platform",
		"shortDesc": "Development of a dynamic/configurable information collection and submission platform in the social sector.",
		"imgSrcPath": "/forms.webp",
		"sections": [
			{
				"sectionTitle": "Project Scope",
				"paragraphs": [
					"This project was developed for a company in the public sector and the goal was to develop a web application that allowed users and companies to fill and submit forms online to replace the existing processes that used Adobe forms and/or paper submissions.",
					"This web application was designed firstly as a POOC for one of the existing processes but was planed so that each of its form collections components could be used independently in order to make the introduction of new processes faster and easier.",
					"Using these form collection components as building blocks (identification component, fiscal information, bank information etc..) you could define new processes that used these building blocks without the need to code a new \"workflow\" reducing the workload so that development time was only needed for the creation new collection components."
				]
			},
			{
				"sectionTitle": "Technology Stack",
				"paragraphs": [
					"This project was developed using .Net Core for the back-end API, Angular 8 in the front-end and interacting with both a Microsoft SQLServer database (via Entity Framework) and a Oracle database (mostly via Stored Procedures)."
				]
			},
			{
				"sectionTitle": "Roles",
				"paragraphs": [
					"In this project i was part of a team of 3 developers and responsible for developing both the back-end and front-end, in adition to coordinate with an external team that was exposing new API's for our application to consume data from an already existing system."
				]
			},
			{
				"sectionTitle": "Challenges",
				"paragraphs": [
					"During the project most of the hardships came from trying to find ways to mantain our system modular (avoid the creation of hard dependencies between diferent modular components) and meeting client demands for validation/cross data integrity.",
					"These validations/cross data integrity requirements were not detailed at the project start which forced us to find a way to meet the client requirements and keep the application modular and extensible as planned initialy, in order to do this an external \"validation engine\" was designed where you could define rules and validations without impacting the information collection components directly."
				]
			}
		]
	},
	{
		"slug": "Portfolio",
		"title": "Personal portfolio website",
		"shortDesc": "Development of the website you are on currently.",
		"imgSrcPath": "/portfolio.webp",
		"sections": [
			{
				"sectionTitle": "Project Scope",
				"paragraphs": [
					"This was a personal project in which the goal was to create a simple personal website that i could use as a 'portfolio' of sorts, and easily update and mantain during its lifespan.",
					"which to date should be the website where this is currently being viewed."
				]
			},
			{
				"sectionTitle": "Technology Stack",
				"paragraphs": [
					"The website is developed using Gatsby.",
					"Gatsby was chosen as the framework because it matched on the goals i had for the website when it was first developed.",
					"Gatsby facilitates the generation of static-websites and makes it easy to dynamicly add new pages/segments from markup files."
				]
			},
			{
				"sectionTitle": "Roles",
				"paragraphs": [
					"First and foremost, need to give credit where credit is due.",
					"The design you see is from <a href=\"https://html5up.net/m\"><b>HTML5 UP</b></a> who does a great job creating responsive designs you can use.",
					"And <a href=\"https://github.com/anubhavsrivastava\"><b>Anubhav Srivastava</b></a> for converting the desing into a <a href=\"https://www.gatsbyjs.com/starters/anubhavsrivastava/gatsby-starter-solidstate\"><b>Gatsby JS starter</b></a>.",
					"Using this design and starter, what was left to do was setting up Gatsby to read from markup files and create pages from them dynamicly."
				]
			}
		]
	},
	{
		"slug": "Shery",
		"title": "Simple encrypted message sharing service",
		"shortDesc": "Development of a simple web app that allows the sharing of messages between devices leveraging end to end encryption",
		"imgSrcPath": "/shery.webp",
		"sections": [
			{
				"sectionTitle": "Project Scope",
				"paragraphs": [
					"The web app was a side project that intends to provide a way of sharing simple and short private information such as passwords between devices while ensuring that the information is not saved in a clear text form",
					"This came from a need of enabling a person to send a password (sourced from a password manager) from a mobile device to another device where one does not have said password manager installed (for instance a family computer device or any other device not owned by the person)"
				]
			},
			{
				"sectionTitle": "Technology Stack",
				"paragraphs": [
					"This web app was developed using Next.js, React, Firebase Authentication, and Firebase Firestore.",
					"The choice of using Next.js and React came from me wanting to learn about Next.js and getting a refresher on React.",
					"As per Firebase, the simplicity it allows in setting up an authentication system and real time updates from the database were good fits for the goals and intended use of the web app"
				]
			},
			{
				"sectionTitle": "How it works",
				"paragraphs": [
					"After logging in you can create a sharing session, by doing this you generate (client side) new asymmetric encryption keys on your browsers.",
					"The public key of that asymmetric key pair is sent to the Firestore database where an entry is created to identify this sharing session.",
					"The second device can then connect via the QR code (or clicking on it to copy a link) and submit text info, this information is encrypted on client side using the public key present in the firestore database and the encrypted text is saved on that same session entry.",
					"This triggers a real time change on the first device allowing you to decrypt the information sent over with the private key present in memory for that sharing session.",
					"Since these keys are saved in memory, if the receiver device (the one that created the sharing session) closes out of the tab that session is rendered unusable."
				]
			},
			{
				"sectionTitle": "Try it out",
				"paragraphs": [
					"Shery is currently available at https://shery.vercel.app/",
					"Since the goal was for personal use there currently is no account creating workflow available but you can use the account test@test.com with the password test123 to try it out.",
					"The workflow is quite simple, after logging in on both devices (receiver and sender), you press the “Create new sherry” button on the receiver device.",
					"This should take to a page where a QR can be read with the sender device (or clicked on to copy the link), and load the asymmetric encryption keys to be used.",
					"After reading the QR code with the sender device you can fill in the information you wish to share and send it over to the receiver device.",
					"Pressing the send button you should see a real time change on the receiver device notifying you that information was received and can be decrypted.",
					"After pressing the decrypt button this information should be displayed in clear text."
				]
			}
		]
	},
	{
		"slug": "SmsNotificationSystem",
		"title": "SMS notification service for Field Force Management platform",
		"shortDesc": "Development of a Windows Service based software to monitor real time changes in the workflows of a Field Force Management platform and notify the client through SMS of said changes.",
		"imgSrcPath": "/cellTower.webp",
		"sections": [
			{
				"sectionTitle": "Project Scope",
				"paragraphs": [
					"The project was done for a telco company brazil and the goal was to develop an application that consumed information from a field force management platform and used that information to notify end clients and field technicians of changes to their tasks via SMS either in scheduled alerts or real-time notifications.",
					"Replies sent to these messages were forwarded to the application and a shortcode maping system was used to allow the end client to request changes like rescheduling, canceling and other business specific actions."
				]
			},
			{
				"sectionTitle": "Technology Stack",
				"paragraphs": [
					"This was a project that was almost 100% back-end and was done in C# with an Oracle database as a support.",
					"The core of the application were Windows Services that routinely checked for new information in the main platform and decided whether the changes that ocurred to the work task should create new scheduled alerts or real-time notifications.",
					"A REST API was also exposed so that the reply messages could be received and allow other external systems to use our application as a broker for the work assignment changes (rescheduling, cancelling etc...) ",
					"A small web page was created to allow the parametrization of what changes would trigger SMS notifications and when to notify the clients (number of days before task execution) this web page was integrated in an already existing web portal and was developed using APS.NET MVC 5"
				]
			},
			{
				"sectionTitle": "Roles",
				"paragraphs": [
					"During this project i was part of a team composed of 2 developers which allowed me to be involved in the complete lifecycle of the application, from change request analysis, development, deploy and maintenance."
				]
			},
			{
				"sectionTitle": "Challenges",
				"paragraphs": [
					"One of the chalenges faced during the development of the application was the fact that after development was started the client asked that instead of using a push approach (main field force application would send web requests to our app with information changes) we used a pull approach instead, where we would routinely request for batches of information to update on our side.",
					"With this change we also had to worry about problems that could arrise during periods of high usage, such as the batches used not being large enough/performant enough to handle all the in real time messages causing notifications to arrive after they were suposed to.",
					"In order to combat this, parts of the system were scaled up, using paraleziation of some portions of the system in order to increase output (SMS trigger processing) while in other areas we increased the number of machines processing information (batch collection and processing from main application), both of this approaches forced us to now have to manage concurrency in our application, which proved to be quite an interesting chalenge at the time."
				]
			}
		]
	}
]