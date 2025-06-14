import { useLocation } from "react-router-dom";
// import Header from "../components/Header";
import Hero from "../components/Hero";
// import Chip from "../components/Chip";
import TextGroup from "../components/TextGroup";
import TextImage from "../components/TextImage";
import FadeSnapSection from "../components/FadeSnapSection";
import StickyNote from "../components/StickyNote";
import ChatBubble from "../components/ChatBubble";

const GiantEagle = () => {
	const location = useLocation();
	const { projectData } = location.state;
	console.log("projectData", projectData);

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
							Imagining an in-store AR experience designed to
							limit visual stimuli & lessen the cognitive overload
							experienced by shoppers with Attention Deficit
							Hyperactive Disorder (ADHD).
						</p>
					</Hero>
				</FadeSnapSection>
				<div className="flex flex-col gap-[25px] md:gap-[50px] lg:gap-[100px] px-[5%] mt-[100px]">
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
								// subheading="a more straightforward shopping experience"
							>
								<p>
									As is the case with most large supermarkets,
									Giant Eagle stocks an enormous array of
									products & brands (including their own),
									providing shoppers with near-endless
									options.
								</p>
								<p>
									<strong>
										The size of these stores & the sheer
										variety of items can both allow for much
										appreciated flexibility for some &
										create overwhelming complexity for
										others.
									</strong>{" "}
									We’ve identified this as a promising problem
									space.
								</p>
								<p>
									By leveraging the capabilities of AR in
									uniquely designed glasses, we aim to improve
									the accessibility of shopping at Giant Eagle
									for users with ADHD. Our solution
									specifically targets challenges users have
									expressed related to excessive visual
									stimulation.
								</p>
							</TextGroup>
						</section>
					</FadeSnapSection>

					<FadeSnapSection>
						<section className="py-[50px] w-full max-w-screen-lg mx-auto flex flex-col gap-2">
							<TextGroup heading="why we designed it" />

							<section className="grid grid-cols-1 md:grid-cols-2 items-end justify-items-center">
								<div className="flex flex-col">
									<div>
										<ChatBubble direction="in">
											<strong>
												Grocery shopping is sensory
												hell.
											</strong>{" "}
											The lights are too bright, there is
											a lot of sounds, smells, and a lot
											going on.
											<small>source here</small>
										</ChatBubble>
										<ChatBubble direction="in">
											... if I need more than a couple of
											things, my SO has to go with me.{" "}
											<strong>
												It's too overwhelming for me to
												do by myself.
											</strong>
											<small>source here</small>
										</ChatBubble>
									</div>
									<StickyNote className="mx-auto mt-5">
										<p className="font-semibold">
											ADHD shoppers experience sensory
											overload and decision fatigue, which
											can be debilitating.
										</p>
									</StickyNote>
								</div>
								<div className="flex flex-col">
									<div className="">
										{/* <div className="">
											<TextGroup heading="why we designed it" />
										</div> */}
										<ChatBubble direction="out">
											<p>
												<strong>
													... even if I go in with a
													list, once I get into the
													grocery store I'm
													overwhelmed by everything
												</strong>{" "}
												and find it hard to just go in
												grab the things I need and get
												out.
											</p>
											<p>
												I get stuck looking at
												everything and its time
												consuming and often stressful.
											</p>
										</ChatBubble>
									</div>
									<StickyNote className="mx-auto mt-5">
										<p className="font-semibold">
											Grocery lists help shoppers approach
											shopping with a plan, but they still
											spend a lot of time in the store.
										</p>
									</StickyNote>
								</div>
							</section>
						</section>
					</FadeSnapSection>

					<FadeSnapSection>
						<section className="py-[50px] w-full max-w-screen-lg mx-auto flex flex-col gap-2">
							<TextImage
								heading="evaluating existing hardware"
								imageAlt="rayneo"
								image="giantEagle/rayneo.png"
								addImageShadow={false}
							>
								<p>
									We had a checklist of requirements when
									seeking out the best device to model our
									experience around, but soon found that they
									couldn’t all be met by an existing product.
								</p>

								<p>
									The RayNeo X2’s came the closest. In
									addition to consolidated hardware, they
									offered a limited set of interactions that
									remain confined to the glasses themselves
									that we’ve adopted for our experience. To
									satisfy the other items on our list, we
									designed & propose a more adaptable frame.
								</p>
							</TextImage>

							<section className="flex gap-5 flex-wrap mt-5 justify-center">
								<StickyNote>
									<p className="font-semibold">
										<strong>
											Hardware use would not alienate user
											in GE’s public setting.
										</strong>
									</p>
									<p>
										{"\u2611"} Reasonably inconspicuous
										(likely won’t include hand or eye
										tracking)
									</p>
								</StickyNote>
								<StickyNote>
									<p className="font-semibold">
										<strong>
											Hardware would not be overly
											difficult for GE to monitor &
											maintain.
										</strong>
									</p>
									<p>
										{"\u2611"} Does not require additional
										equipment (puck, battery pack, etc.)
									</p>
									<p>
										{"\u2610"} Does not require the purchase
										of many slight variations to suit many
										users
									</p>
								</StickyNote>
								<StickyNote>
									<p className="font-semibold">
										<strong>
											Hardware can be used communally.
										</strong>
									</p>
									<p>
										{"\u2610"} Can accommodate physical
										differences in users
									</p>
									<p>
										{"\u2610"} Can be worn with (most)
										prescription eyewear
									</p>
								</StickyNote>
							</section>
						</section>
					</FadeSnapSection>

					<FadeSnapSection>
						<section className="flex flex-col gap-10 mt-5 ">
							<div className="">
								<TextImage
									heading="designing more adaptable hardware solution"
									// subheading="Hardware Specifications"
									imageAlt="giant eagle glasses"
									image="giantEagle/newGlassesAll.png"
									addImageShadow={false}
									addComponentShadow={false}
									// imagePlacement="left"
								>
									<p>
										Our imagined solution includes the
										following features:
									</p>
									<ol>
										<li>Power button</li>
										<li>
											Left & right touch panels to capture
											sliding & tapping actions
										</li>
										<li>Two front-facing cameras</li>
										<li>
											Expandable/retractable components to
											fit differently sized individuals
										</li>
										<li>
											Hollow frame is functional on it’s
											own but also fits over glasses
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
										Hardware was revised with thicker frames
										to better accommodate mechanical
										components
									</p>
								</TextImage>
							</div>
						</section>
					</FadeSnapSection>

					<FadeSnapSection>
						<section className="flex flex-col gap-10 mt-5 ">
							<div className="">
								<TextImage
									heading="interactions & gestures"
									// subheading="Hardware Specifications"
									imageAlt="giant eagle glasses"
									image="giantEagle/glassesInteractions.png"
									addImageShadow={false}
									addComponentShadow={false}
									// imagePlacement="left"
								>
									<p>
										Users may make these 3 gestures on
										either of the glasses’ touch panels to
										interact with UI elements.
									</p>
								</TextImage>
							</div>
						</section>
					</FadeSnapSection>

					<FadeSnapSection>
						<section className="py-[50px] w-full max-w-screen-lg mx-auto ">
							<TextGroup heading="experience design">
								{/* <p>
									Division Platform is a flexible,
									WordPress-based web framework developed to
									support Penguin Random House's diverse
									publishing divisions and imprints.
								</p> */}
							</TextGroup>
							<section className="flex flex-col gap-10 mt-5 "></section>
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
										their GE account. This can be done by
										tapping the icon in the upper left of
										their list page.
									</p>
								</TextImage>
							</section>
						</section>
					</FadeSnapSection>

					<FadeSnapSection>
						<section className="py-[50px] w-full max-w-screen-lg mx-auto ">
							<TextGroup heading="other considerations & caveats">
								{/* <p>
									Division Platform is a flexible,
									WordPress-based web framework developed to
									support Penguin Random House's diverse
									publishing divisions and imprints.
								</p> */}
							</TextGroup>
							<section className="flex flex-col gap-10 mt-5 "></section>
						</section>
					</FadeSnapSection>
				</div>
			</main>
		</>
	);
};

export default GiantEagle;
