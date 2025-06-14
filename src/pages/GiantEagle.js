import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Chip from "../components/Chip";
import TextGroup from "../components/TextGroup";
import TextImage from "../components/TextImage";
import ProjectCard from "../components/ProjectCard";
import FadeSnapSection from "../components/FadeSnapSection";
import StickyNote from "../components/StickyNote";

const GiantEagle = () => {
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
					{/* <FadeSnapSection>
						<section className="py-[50px] w-full max-w-screen-lg mx-auto ">
							<div className="grid md:grid-cols-[1fr,1fr,2fr]  grid-cols-[1fr,1fr] sm:flex-nowrap gap-x-[5%] gap-y-14">
								<div className="min-w-fit">
									<h3 className="text-xl font-bold mb-2">
										Role
									</h3>
									<p>Contract Web Developer</p>
								</div>
								<div className="min-w-fit">
									<h3 className="text-xl font-bold mb-2">
										Team
									</h3>
									<p>1-2 product owners</p>
									<p>2-4 developers</p>
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
					</FadeSnapSection> */}

					<FadeSnapSection>
						<section className="py-[50px] w-full max-w-screen-lg mx-auto ">
							<TextGroup
								heading="what we designed"
								subheading="a more straightforward shopping experience"
							>
								<p>
									Division Platform is a flexible,
									WordPress-based web framework developed to
									support Penguin Random House's diverse
									publishing divisions and imprints.
								</p>
							</TextGroup>
						</section>
					</FadeSnapSection>

					<FadeSnapSection>
						<section className="py-[50px] w-full max-w-screen-lg mx-auto ">
							<TextGroup
								heading="why we designed it"
								subheading="the problem space & target user"
							></TextGroup>
							<section className="flex flex-col gap-10 mt-5 ">
								<section className="flex gap-5 flex-wrap">
									<StickyNote>
										<p className="font-semibold">
											“
											<strong>
												Grocery shopping is sensory hell
											</strong>
											.
										</p>
										<p>
											The lights are too bright, there is
											a lot of sounds, smells, and a lot
											going on.”
										</p>
									</StickyNote>
									<StickyNote>
										<p>
											“... if I need more than a couple of
											things, my SO has to go with me.
										</p>
										<p>
											<strong>
												It's too overwhelming for me to
												do by myself
											</strong>
											.”
										</p>
									</StickyNote>
									<StickyNote>
										<p>
											“...{" "}
											<strong>
												even if I go in with a list,
												once I get into the grocery
												store I'm overwhelmed by
												everything
											</strong>{" "}
											and find it hard to just go in grab
											the things I need and get out.
										</p>
										<p>
											I get stuck looking at everything
											and{" "}
											<strong>
												it's time consuming and often
												stressful
											</strong>
											.”
										</p>
									</StickyNote>
								</section>
								<small>Link sources here.</small>
							</section>
						</section>
					</FadeSnapSection>

					<FadeSnapSection>
						<section className="py-[50px] w-full max-w-screen-lg mx-auto ">
							<TextGroup heading="hardware evaluation & specs">
								<p>
									Division Platform is a flexible,
									WordPress-based web framework developed to
									support Penguin Random House's diverse
									publishing divisions and imprints.
								</p>
							</TextGroup>
							<section className="flex flex-col gap-10 mt-5 ">
								<div className="">
									<TextImage
										subheading="Hardware Specifications"
										imageAlt="giant eagle glasses"
										image="giantEagle/newGlassesAll.png"
										addImageShadow={false}
										addComponentShadow={false}
										imagePlacement="left"
									>
										<ol>
											<li>Power button</li>
											<li>
												Left & right touch panels to
												capture sliding & tapping
												actions
											</li>
											<li>Two front-facing cameras</li>
											<li>
												Expandable/retractable
												components to fit differently
												sized individuals
											</li>
											<li>
												Hollow frame is functional on
												it’s own but also fits over
												glasses
											</li>
										</ol>
									</TextImage>

									<TextImage
										subheading="Iteration"
										imageAlt="giant eagle glasses"
										image="giantEagle/glassesIteration.png"
										addImageShadow={false}
										addComponentShadow={false}
										// imagePlacement="left"
									>
										<p>
											Hardware was revised with thicker
											frames to better accommodate
											mechanical components
										</p>
									</TextImage>
								</div>
							</section>
						</section>
					</FadeSnapSection>

					<FadeSnapSection>
						<section className="py-[50px] w-full max-w-screen-lg mx-auto ">
							<TextGroup heading="mobile app integration">
								{/* <p>
									Division Platform is a flexible,
									WordPress-based web framework developed to
									support Penguin Random House's diverse
									publishing divisions and imprints.
								</p> */}
							</TextGroup>
							<section className="flex flex-col gap-10 mt-5 ">
								<TextImage
									subheading="Configuring the Experience"
									imageAlt="giant eagle glasses"
									image="giantEagle/allConfig.png"
									addImageShadow={false}
									addComponentShadow={false}
									imagePlacement="bottom"
								>
									<p>
										Users can adjust certain parts of their
										experience (eg. font size & filter
										opacity) before picking up their glasses
										in-store. This can be accomplished by
										finding AR Experience Settings under the
										Profile of the GE app.
									</p>
								</TextImage>
								<TextImage
									subheading="Launching the Experience"
									imageAlt="giant eagle glasses"
									image="giantEagle/listToCode.png"
									addImageShadow={false}
									addComponentShadow={false}
									imagePlacement="bottom"
								>
									<p>
										Once users have made their shopping list
										& are in-store with their glasses ready
										to go, they’ll be prompted by the device
										to bring up the QR code used to pair
										their GE account.
									</p>
									<p>
										This can be done by tapping the icon in
										the upper left of their list page.
									</p>
								</TextImage>
							</section>
						</section>
					</FadeSnapSection>
				</div>
			</main>
		</>
	);
};

export default GiantEagle;
