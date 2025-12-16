import { Badge } from "@/components/ui/badge";

import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Home() {
	return (
		<div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8 print:p-0 print:bg-white">
			<main className="max-w-[210mm] mx-auto bg-white dark:bg-black p-[20mm] shadow-xl text-sm md:text-base print:max-w-none print:shadow-none print:m-0 print:p-0">
				{/* Header */}
				<header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
					<div>
						<h1 className="text-4xl font-bold tracking-tight text-primary mb-1">
							GREG CONNOLLY
						</h1>
						<p className="text-xl text-gray-500 dark:text-gray-400 font-medium">
							Software Engineer
						</p>
					</div>
					<div className="flex flex-col gap-2 text-gray-600 dark:text-gray-400 text-sm">
						<div className="flex items-center gap-2">
							<Mail className="h-4 w-4 text-primary" />
							<a
								href="mailto:gregoryconnolly@gmail.com"
								className="hover:underline"
							>
								gregoryconnolly@gmail.com
							</a>
						</div>
						<div className="flex items-center gap-2">
							<Phone className="h-4 w-4 text-primary" />
							<span>+61 456 636 779</span>
						</div>
						<div className="flex items-center gap-2">
							<MapPin className="h-4 w-4 text-primary" />
							<span>Maroochydore</span>
						</div>
					</div>
				</header>

				<Separator className="mb-6" />

				{/* Professional Summary */}
				<section className="mb-6">
					<h2 className="text-lg font-bold text-primary uppercase mb-2 tracking-wide">
						Professional Summary
					</h2>
					<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
						Fast learning, highly skilled and motivated engineer with 4+ years
						experience building and maintaining web applications, CI/CD
						pipelines and Golang microservices. Proficient in Next.js / React,
						Golang and Docker / Kubernetes with a strong background in agile
						practices. Proven track record of solving highly challenging issues
						with high quality clean and simple code.
					</p>
				</section>

				{/* Experience */}
				<section className="mb-6">
					<h2 className="text-lg font-bold text-primary uppercase mb-4 tracking-wide">
						Experience
					</h2>
					<div className="space-y-6">
						<div>
							<div className="flex justify-between items-baseline mb-1">
								<h3 className="font-bold text-gray-900 dark:text-gray-100">
									Backend Engineer
								</h3>
								<span className="text-gray-500 text-sm">
									May 2023 - Jun 2024
								</span>
							</div>
							<p className="text-gray-600 dark:text-gray-400 font-medium text-sm mb-2">
								Paypa Plane, BRISBANE
							</p>
							<ul className="list-disc list-outside ml-4 text-gray-700 dark:text-gray-300 space-y-1">
								<li>
									Designing, building and maintaining a fleet of microservices
									to create smart payment agreements and initiate PayTo payments
									via the Australian National Payments Provider network
								</li>
								<li>
									Creating a web hook service to allow clients to configure and
									receive web hook notifications
								</li>
								<li>
									Design and implementation of a binary tree parser and searcher
									for nested items including benchmarking to fine tune memory
									management and CPU usage
								</li>
								<li>
									Simulate payment service to allow load testing of payment
									agreement creating and payment initiation.
								</li>
							</ul>
						</div>

						<div>
							<div className="flex justify-between items-baseline mb-1">
								<h3 className="font-bold text-gray-900 dark:text-gray-100">
									Full Stack Software Developer
								</h3>
								<span className="text-gray-500 text-sm">
									Apr 2021 - May 2023
								</span>
							</div>
							<p className="text-gray-600 dark:text-gray-400 font-medium text-sm mb-2">
								Patient Zero, BRISBANE
							</p>
							<ul className="list-disc list-outside ml-4 text-gray-700 dark:text-gray-300 space-y-1">
								<li>
									Working as part of a high functioning software delivery team
									to build, test and deploy software to the clients
									specifications
								</li>
								<li>
									Required to work closely with various stakeholders including
									product owners, designers and infrastructure in a
									collaborative, open way
								</li>
								<li>
									Lead developer in creating CI/CD pipelines using Github
									actions for efficient and reliable deployment to nexus
									container registry
								</li>
								<li>
									Improving code CI pipeline down to 3-5 mins from 12+ mins
								</li>
								<li>Create custom plugin for Vite build process</li>
								<li>
									Security first with content security policies, PII protection
									implemented
								</li>
								<li>
									Containerized applications for hosting on Kuberenetes clusters
								</li>
								<li>
									Utilized a monorepo development environment with Turbo Repo
									and pnpm
								</li>
								<li>
									Contributed to creating a digital transformation framework /
									library built with React/Typescript and a web component
									library built with Lit elements
								</li>
								<li>
									Contributed to the development of web applications using
									React/Typescript on the frontend and .Net on the backend
								</li>
							</ul>
						</div>

						<div>
							<div className="flex justify-between items-baseline mb-1">
								<h3 className="font-bold text-gray-900 dark:text-gray-100">
									Software Engineer
								</h3>
								<span className="text-gray-500 text-sm">
									Mar 2020 - Apr 2021
								</span>
							</div>
							<p className="text-gray-600 dark:text-gray-400 font-medium text-sm mb-2">
								Compiance Training & Engineering, REMOTE
							</p>
							<ul className="list-disc list-outside ml-4 text-gray-700 dark:text-gray-300 space-y-1">
								<li>
									Contract position to deliver software to manage electrical
									workers accreditation and auth
								</li>
								<li>
									Created user interfaces for complex software applications.
								</li>
								<li>
									Adhere to full software development life cycle (SDLC) from
									requirements gathering through system implementation.
								</li>
								<li>
									Analyzed user needs and software requirements to determine
									feasibility of design within time and cost constraints.
								</li>
							</ul>
						</div>

						<div>
							<div className="flex justify-between items-baseline mb-1">
								<h3 className="font-bold text-gray-900 dark:text-gray-100">
									Senior Operations Engineer
								</h3>
								<span className="text-gray-500 text-sm">
									Jan 2006 - Jun 2015
								</span>
							</div>
							<p className="text-gray-600 dark:text-gray-400 font-medium text-sm mb-2">
								VARIOUS COMPANIES
							</p>
							<ul className="list-disc list-outside ml-4 text-gray-700 dark:text-gray-300 space-y-1">
								<li>
									Engineering design and support for everyday operation of gas
									plants
								</li>
								<li>Onsite issue response and risk mitigation</li>
								<li>
									A key part of a multi-discipline team to monitor operational
									equipment and maximize throughput
								</li>
								<li>
									Consistent collaboration with other departments such as
									offsite engineering, commercial and project groups
								</li>
								<li>Mentoring of junior engineers.</li>
							</ul>
						</div>
					</div>
				</section>

				{/* Education */}
				<section className="mb-6">
					<h2 className="text-lg font-bold text-primary uppercase mb-4 tracking-wide">
						Education
					</h2>
					<div className="space-y-4">
						<div>
							<div className="flex justify-between items-baseline">
								<h3 className="font-bold text-gray-900 dark:text-gray-100">
									Royal Melbourne Institute of Technology
								</h3>
								<span className="text-gray-500 text-sm">Nov 2019</span>
							</div>
							<p className="text-gray-600 dark:text-gray-400 text-sm">
								Completed coursework towards Bachelor of Information Technology
							</p>
						</div>
						<div>
							<div className="flex justify-between items-baseline">
								<h3 className="font-bold text-gray-900 dark:text-gray-100">
									Queensland University of Technology - Brisbane
								</h3>
								<span className="text-gray-500 text-sm">Dec 2016</span>
							</div>
							<p className="text-gray-600 dark:text-gray-400 text-sm">
								Masters of Law - Intellectual Property
							</p>
						</div>
						<div>
							<div className="flex justify-between items-baseline">
								<h3 className="font-bold text-gray-900 dark:text-gray-100">
									University of Queensland - Brisbane
								</h3>
								<span className="text-gray-500 text-sm">Nov 2006</span>
							</div>
							<p className="text-gray-600 dark:text-gray-400 text-sm">
								Completed coursework towards Bachelor of Engineering Chemical
							</p>
						</div>
					</div>
				</section>

				{/* Skills */}
				<section className="mb-6">
					<h2 className="text-lg font-bold text-primary uppercase mb-4 tracking-wide">
						Skills
					</h2>
					<div className="flex flex-wrap gap-2">
						{[
							"Next.js / React",
							"Typescript",
							"Golang",
							"Kubernetes",
							"Docker",
							"Relational database",
							"Non relational databases",
							"Event sourcing",
							"Event driven architecture",
							"Agile development",
							"TDD / BDD",
							"Git",
							"GitHub actions",
							"Domain Driven Design",
							"Microservices",
							"Task breakdown and estimation",
							"CI/CD pipeline creation",
							"Google Cloud Platform",
							"Terraform",
						].map((skill) => (
							<Badge
								key={skill}
								variant="outline"
								className="text-sm py-0.5 font-normal bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
							>
								{skill}
							</Badge>
						))}
					</div>
				</section>

				{/* Certifications and Accomplishments Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
					<section>
						<h2 className="text-lg font-bold text-primary uppercase mb-4 tracking-wide">
							Certifications
						</h2>
						<ul className="space-y-2 text-gray-700 dark:text-gray-300">
							<li>
								<span className="font-medium">AWS, Cloud Practitioner</span>,
								2020
							</li>
							<li>
								<span className="font-medium">
									Linux Foundation, Certified Kubernetes Administrator
								</span>
								, 2021
							</li>
							<li>
								<span className="font-medium">
									Linux Foundation, Certified Kubernetes Developer
								</span>
								, 2021
							</li>
						</ul>
					</section>

					<section>
						<h2 className="text-lg font-bold text-primary uppercase mb-4 tracking-wide">
							Accomplishments
						</h2>
						<ul className="list-disc list-outside ml-4 text-gray-700 dark:text-gray-300 space-y-1">
							<li>
								Contributing significantly to the delivery of a digital
								transaction platform for no code form generation.
							</li>
							<li>
								Mentoring interns during week long graduate developer program
							</li>
							<li>
								Delivering company wide presentation on five key principles of
								good dev ops
							</li>
							<li>
								Online company wide presentation on using a monorepo and
								playwright
							</li>
						</ul>
					</section>
				</div>

				{/* References */}
				<section>
					<h2 className="text-lg font-bold text-primary uppercase mb-2 tracking-wide">
						References
					</h2>
					<p className="text-gray-600 dark:text-gray-400 italic">
						References available upon request
					</p>
				</section>
			</main>
		</div>
	);
}
