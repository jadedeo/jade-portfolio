import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Chip from "../components/Chip";
import TextGroup from "../components/TextGroup";
import TextImage from "../components/TextImage";
import ProjectCard from "../components/ProjectCard";
import FadeSnapSection from "../components/FadeSnapSection";

const Splash = () => {
	const location = useLocation();
	const { projectData } = location.state;
	console.log("projectData", projectData);
	const skills = projectData.tags;

	return (
		<>
			{/* <Header /> */}
			<main className="snap-y snap-mandatory scroll-smooth  mb-[50px] min-h-dvh ">
				<FadeSnapSection className="h-dvh">
					<Hero
						title={projectData.title}
						subtitle={projectData.subtitle}
						image={projectData.image}
					>
						<p>
							Division Platform is a flexible, WordPress-based web
							framework developed to support Penguin Random
							House's diverse publishing divisions and imprints.
							The system provides a centralized yet highly
							customizable way to create industry-facing websites,
							automatically syncing book metadata from PRH's
							internal systems while maintaining each imprint’s
							distinct visual identity.
						</p>
					</Hero>
				</FadeSnapSection>
				<div className="flex flex-col gap-[100px] px-[5%] mt-[100px]">
					<FadeSnapSection>
						<section className="py-[50px] w-full max-w-screen-lg mx-auto ">
							<div className="grid grid-cols-[1fr,1fr,2fr] sm:flex-nowrap gap-x-[5%] gap-y-14">
								<div className="min-w-fit">
									<h3 className="text-xl font-bold mb-2">
										Role
									</h3>
									<p>Associate Web Developer</p>
								</div>
								<div className="min-w-fit">
									<h3 className="text-xl font-bold mb-2">
										Team
									</h3>
									<p>2 product owners</p>
									<p>3-4 developers</p>
									<p>1 product designer</p>
									<p>1 QA engineer</p>
								</div>
								<div>
									<h3 className="text-xl font-bold mb-2">
										Skills & Tools
									</h3>
									<div className="flex gap-x-1 gap-y-2 flex-wrap h-fit">
										{projectData.tags.map((tag, i) => (
											<Chip key={i} label={tag} />
										))}
									</div>
								</div>
							</div>
						</section>
					</FadeSnapSection>

					<FadeSnapSection>
						<section className="w-full max-w-screen-lg mx-auto my-10 flex flex-col gap-5">
							<TextGroup
								heading="Purpose + Impact"
								subheading="In-house tech support & decreasing digital footprint"
							>
								<p>
									Division Platform is a flexible,
									WordPress-based web framework developed to
									support Penguin Random House's diverse
									publishing divisions and imprints. The
									system provides a centralized yet highly
									customizable way to create industry-facing
									websites, automatically syncing book
									metadata from PRH's internal systems while
									maintaining each imprint’s distinct visual
									identity.
								</p>
							</TextGroup>

							<section className="grid grid-cols-5 gap-5 justify-items-center items-center mt-3">
								<a
									href="https://crownpublishing.com/"
									target="_blank"
									rel="noreferrer"
								>
									<img
										className="max-h-[75px]"
										src="prhProjects/crownLogo.png"
									/>
								</a>
								<a
									href="https://borrowreadrepeat.com/"
									target="_blank"
									rel="noreferrer"
								>
									<img
										className="max-h-[75px] "
										src="prhProjects/brrLogo.png"
									/>
								</a>
								<a
									href="https://kokilabooks.com/"
									target="_blank"
									rel="noreferrer"
								>
									<img
										className="max-h-[75px]"
										src="prhProjects/kokilaLogo.avif"
									/>
								</a>
								<a
									href="https://penguinrandomhouseaudio.com/"
									target="_blank"
									rel="noreferrer"
								>
									<img
										className="max-h-[75px]"
										src="prhProjects/audioLogo.png"
									/>
								</a>
								<a
									href="https://knopfdoubleday.com/"
									target="_blank"
									rel="noreferrer"
								>
									<img
										className="max-h-[75px]"
										src="prhProjects/kddLogo.jpg"
									/>
								</a>
							</section>
						</section>
					</FadeSnapSection>

					<FadeSnapSection>
						<section className=" w-full max-w-screen-lg mx-auto my-10">
							<TextGroup heading="Gift with Purchase">
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Praesent gravida arcu dui,
									ut eleifend felis congue sit amet. Vivamus
									tincidunt sapien et quam ultrices hendrerit.
									Vivamus tincidunt sapien et quam ultrices
									hendrerit.
								</p>
							</TextGroup>

							<section className="flex flex-col gap-10 mt-10">
								<TextImage
									// heading="Team List Module"
									subheading="Module Settings"
									// image="prhProjects/audioModal1.png"
									// imageAlt="audio modal 1"
									imagePlacement="left"
								>
									<p className="mt-3">
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit. Aenean commodo
										vulputate sollicitudin. Sed accumsan
										nisi purus, et aliquam orci sagittis eu.
										In eleifend faucibus sapien eu
										imperdiet.
									</p>
									<ul>
										<li>
											Nullam dapibus cursus dui, eget
											egestas elit tempus a. Curabitur a
											feugiat ex, sit amet consectetur
											nibh.
										</li>
									</ul>
								</TextImage>

								<TextImage
									// heading="Team List Module"
									subheading="Report Generation"
									// image="prhProjects/audioModal1.png"
									// imageAlt="audio modal 1"
									imagePlacement="left"
								>
									<p className="mt-3">
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit. Aenean commodo
										vulputate sollicitudin. Sed accumsan
										nisi purus, et aliquam orci sagittis eu.
										In eleifend faucibus sapien eu
										imperdiet.
									</p>
									<ul>
										<li>
											Nullam dapibus cursus dui, eget
											egestas elit tempus a. Curabitur a
											feugiat ex, sit amet consectetur
											nibh.
										</li>
									</ul>
								</TextImage>

								<TextImage
									// heading="Team List Module"
									subheading="Email Notification"
									image="prhProjects/gwpEmail.png"
									imageAlt="audio modal 1"
									imagePlacement="left"
								>
									<p className="mt-3">
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit. Aenean commodo
										vulputate sollicitudin. Sed accumsan
										nisi purus, et aliquam orci sagittis eu.
										In eleifend faucibus sapien eu
										imperdiet.
									</p>
									<ul>
										<li>
											Nullam dapibus cursus dui, eget
											egestas elit tempus a. Curabitur a
											feugiat ex, sit amet consectetur
											nibh.
										</li>
									</ul>
								</TextImage>
							</section>
						</section>
					</FadeSnapSection>
				</div>
			</main>
		</>
	);
};

export default Splash;
