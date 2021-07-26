import React from 'react';
import { useRouter } from 'next/dist/client/router';
import { PrismaClient } from '@prisma/client';

export const getServerSideProps = async ({ params }) => {
	const prisma = new PrismaClient();
	const profile = await prisma.profile.findUnique({
		where: {
			id: Number(params?.id) || -1,
		},
		include: {
			user: true,
			locationsWanted: true,
			frontEndTechnologies: true,
			backEndTechnologies: true,
			databases: true,
			operations: true,
			experiences: true,
			projects: true,
			roleType: true,
		},
	});

	return {
		props: profile,
	};
};

function Profile(props: Profile) {
	const router = useRouter();
	const { id } = router.query;

	return (
		<main className="container page-margin-top shadow p-3 mb-5 bg-body rounded col-lg-8">
			<div className="d-flex justify-content-center mt-5">
				<img src="/upward-profile-logo.png" width="175" height="90" />
			</div>
			<div className="w-75 mx-auto">
				<hr />
			</div>
			<section className="mt-4 mb-3 ms-5">
				<h2 className="fs-4">About</h2>
				<div>
					<div>
						Full Name: {props.user?.firstName} {props.user?.lastName}
					</div>
					<div>Email: {props.user?.email}</div>
					<div>
						LinkedIn: <a href={props.linkedinUrl}>{props.linkedinUrl}</a>
					</div>
					<div>
						Github: <a href={props.githubLink}>{props.githubLink}</a>
					</div>
				</div>
			</section>
			<section className="mb-3 ms-5">
				<h2 className="fs-4">Looking For</h2>
				<div>
					<span className="me-2">Location(s):</span>
					{props.locationsWanted?.map((item, index, arr) => (
						<span key={index}>
							{item.location}
							{index != arr.length - 1 ? ', ' : ''}
						</span>
					))}
				</div>
				<div>
					<span className="me-2">Role Type:</span>
					{props.roleType?.map((item, index, arr) => (
						<span key={index}>
							{item.type}
							{index != arr.length - 1 ? ', ' : ''}
						</span>
					))}
				</div>
				<div>Minimum Salary: {props.minimumSalary}</div>
				<div>Maximum Salary: {props.maximumSalary}</div>
				<div>Visa Type: {props.visaType}</div>
			</section>
			<section className="mb-3 ms-5">
				<h2 className="fs-4">Technologies</h2>
				<div>
					<span className="me-2">Frontend:</span>
					{props.frontEndTechnologies?.map((item, index, arr) => (
						<span key={index}>
							{item.technology}
							{index != arr.length - 1 ? ', ' : ''}
						</span>
					))}
				</div>
				<div>
					<span className="me-2">Backend:</span>
					{props.backEndTechnologies?.map((item, index, arr) => (
						<span key={index}>
							{item.technology}
							{index != arr.length - 1 ? ', ' : ''}
						</span>
					))}
				</div>
				<div>
					<span className="me-2">Database:</span>
					{props.databases?.map((item, index, arr) => (
						<span key={index}>
							{item.technology}
							{index != arr.length - 1 ? ', ' : ''}
						</span>
					))}
				</div>
				<div>
					<span className="me-2">Infrastructure:</span>
					{props.operations?.map((item, index, arr) => (
						<span key={index}>
							{item.technology}
							{index != arr.length - 1 ? ', ' : ''}
						</span>
					))}
				</div>
			</section>
			<section className="mb-3 ms-5">
				<h2 className="fs-4">Experience</h2>
				{props.experiences?.map((experience, index) => (
					<div className="mb-2" key={index}>
						<div>Title: {experience.userTitle}</div>
						<div>Location: {experience.location}</div>
						<div>
							Dates: {experience.from.getFullYear()} - {experience.to.getFullYear()}
						</div>
						<div>{experience.accomplishments}</div>
					</div>
				))}
			</section>
			<section className="mb-5 ms-5">
				<h2 className="fs-4">Projects</h2>
				{props.projects?.map((project, index) => (
					<div className="mb-2" key={`project-${index}`}>
						<div>Title: {project.title}</div>
						<div>
							Dates: {project.from.getFullYear()} - {project.to.getFullYear()}
						</div>
						<div>
							URL: <a href={project.url}>{project.url}</a>
						</div>
						<div>Description: {project.description}</div>
					</div>
				))}
			</section>
		</main>
	);
}

interface Profile {
	id?: number;
	user?: User;
	userId?: number;
	roleType?: RoleType[];
	yearsOfExperience?: number;
	frontEndTechnologies?: FrontendTechnology[];
	backEndTechnologies?: BackendTechnology[];
	databases?: StorageTechnology[];
	operations?: OperationsTechnology[];
	locationsWanted?: LocationWanted[];
	minimumSalary?: number;
	maximumSalary?: number;
	calendlyLink?: string;
	projects?: Project[];
	experiences?: Experience[];
	linkedinUrl?: string;
	githubLink?: string;
	visaType?: VisaType;
}

interface User {
	id?: number;
	firstName?: string;
	lastName?: string;
	email?: string;
	createdAt?: Date;
	updatedAt?: Date;
	authenticationMethod?: AuthenticationMethod;
	role?: Role;
	profile?: Profile;
	tasks?: Task[];
}

interface Task {
	id?: number;
	createdAt?: Date;
	updatedAt?: Date;
	title?: string;
	description?: string;
	author?: User;
	authorId?: number;
	status?: TaskStatus;
}

interface RoleType {
	id: number;
	type: RoleDescription;
}

interface FrontendTechnology {
	id?: number;
	technology?: FrontendTechnologies;
}

interface BackendTechnology {
	id: number;
	technology: BackendTechnologies;
}

interface StorageTechnology {
	id?: number;
	technology?: StorageTechnologies;
}

interface OperationsTechnology {
	id?: number;
	technology?: OperationsTechnologies;
}

interface LocationWanted {
	id?: number;
	location?: Locations;
}

interface Project {
	id?: number;
	createdAt?: Date;
	updatedAt?: Date;
	title?: string;
	description?: string;
	url?: string;
	from?: Date;
	to?: Date;
	profile?: Profile;
	profileId?: number;
}

interface Experience {
	id?: number;
	createdAt?: Date;
	updatedAt?: Date;
	userTitle?: string;
	accomplishments?: string;
	location?: string;
	from?: Date;
	to?: Date;
	profile?: Profile;
	profileId?: number;
	type?: ExperienceType;
}

enum Role {
	USER,
	EMPLOYER,
	MENTOR,
	ADMIN,
}

enum AuthenticationMethod {
	SELF,
	LINKEDIN,
}

enum RoleDescription {
	FRONTEND,
	BACKEND,
	FULLSTACK,
	MANAGER,
	DIRECTOR,
	VPE,
	MACHINE_LEARNING,
	DATA_SCIENCE,
	INFRASTRUCTURE,
	SRE,
	DEVOPS,
	QA,
	QA_MANAGER,
}

enum FrontendTechnologies {
	ANGULAR,
	EMBER,
	FLOW,
	JAVASCRIPT,
	NEXT,
	REACT,
	TYPESCRIPT,
	VUE,
}

enum BackendTechnologies {
	CSHARP,
	DJANGO,
	DOTNET,
	ELIXIR,
	JAVA,
	KAFKA,
	NODE,
	NEST,
	NEXT,
	PHP,
	PYTHON,
	RABBITMQ,
	RAILS,
	RUBY,
}

enum StorageTechnologies {
	CASSANDRA,
	COUCHDB,
	DYNAMODB,
	MEMCACHED,
	MONGODB,
	MSSQL,
	MYSQL,
	NOSQL,
	ORACLE,
	POSTGRES,
	REDIS,
}

enum OperationsTechnologies {
	ANSIBLE,
	AWS,
	AZURE,
	DIGITALOCEAN,
	DOCKER,
	GCS,
	KUBERNETES,
	TERRAFORM,
}

enum Locations {
	REMOTE,
	BAY_AREA,
	NEW_YORK,
	AUSTIN,
	DENVER,
	SEATTLE,
	BOSTON,
	WASHINGTON,
	SAN_DIEGO,
	LOS_ANGELES,
	DALLAS,
	CHICAGO,
	HOUSTON,
	PHOENIX,
	PHILADELPHIA,
}

enum ExperienceType {
	FULL_TIME,
	PART_TIME,
	CONTRACT,
}

enum TaskStatus {
	OPEN,
	DELETED,
	COMPLETED,
}

enum VisaType {
	NEW_H1B,
	TRANSFER_H1B,
	TN_VISA,
	F1,
	NONE,
}

export default Profile;
