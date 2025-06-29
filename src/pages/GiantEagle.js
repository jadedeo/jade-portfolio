import { useLocation } from "react-router-dom";
import { useRef } from "react";

import Hero from "../components/Hero";
import Header from "../components/Header";
import TextGroup from "../components/TextGroup";
import TextImage from "../components/TextImage";
import FadeSection from "../components/FadeSection";
import StickyNote from "../components/StickyNote";
import ChatBubble from "../components/ChatBubble";
import AccordionItem from "../components/AccordionItem";

import useScrollDirection from "../hooks/useScrollDirection";
import useInView from "../hooks/useInView"; // import your hook
import designProjectList from "../resources/designProjectList.json";

const GiantEagle = () => {
	const projectData = designProjectList.find(
		(project) => project.title == "AR for Accessibility at Giant Eagle"
	);
	console.log("projectData", projectData);

	const scrollDir = useScrollDirection();
	const heroRef = useRef(null);
	const isHeroInView = useInView(heroRef, { threshold: 0.2 }); // adjust threshold if needed

	return (
		<>
			<Header useLightLogo={isHeroInView} />
			<main className=" mb-[50px] min-h-dvh ">
				<section ref={heroRef} className="h-dvh">
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
				</section>
				<div className="flex flex-col gap-[25px] md:gap-[50px] lg:gap-[100px] px-[5%] mt-[100px]">
					<FadeSection scrollDir={scrollDir}>
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
					</FadeSection>

					<FadeSection scrollDir={scrollDir}>
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
											<a
												href="https://www.reddit.com/r/ADHD/comments/wvn80k/comment/ilh6ldt/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button"
												className="hover:underline text-gray-400"
											>
												<small>
													r/ADHD | Overstimulated
													while grocery shopping?
												</small>
											</a>
										</ChatBubble>
										<ChatBubble direction="in">
											... if I need more than a couple of
											things, my SO has to go with me.{" "}
											<strong>
												It's too overwhelming for me to
												do by myself.
											</strong>
											<a
												href="https://www.reddit.com/r/ADHD/comments/c1a3cm/comment/erc93va/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button"
												className="hover:underline text-gray-400"
											>
												<small>
													r/ADHD | Grocery shopping is
													the natural enemy
												</small>
											</a>
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
											<a
												href="https://www.reddit.com/r/ADHD/comments/c1a3cm/comment/erbwi0x/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button"
												className="hover:underline text-gray-400"
											>
												<small>
													r/ADHD | Grocery shopping is
													the natural enemy
												</small>
											</a>
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
					</FadeSection>

					<FadeSection scrollDir={scrollDir}>
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
									The{" "}
									<a
										className="underline"
										href="https://www.rayneo.com/products/tcl-rayneo-x2?srsltid=AfmBOoq9WdgyyYHJm3EXgnE_3tgTXjWF206wtdcatxhQnlsD42NwpA9w"
									>
										RayNeo X2s
									</a>{" "}
									came the closest. In addition to
									consolidated hardware, they offered a
									limited set of interactions that remain
									confined to the glasses themselves that
									we’ve adopted for our experience. To satisfy
									the other items on our list, we designed &
									propose a more adaptable frame.
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
					</FadeSection>

					<FadeSection scrollDir={scrollDir}>
						<section className="py-[50px] w-full max-w-screen-lg mx-auto flex flex-col gap-5 ">
							<TextGroup heading="designing a more adaptable hardware solution"></TextGroup>

							{/* <div className=""> */}
							<TextImage
								subheading="Specifications"
								imageAlt="giant eagle glasses"
								image="giantEagle/newGlassesAll.png"
								addImageShadow={false}
								addComponentShadow={false}
								// imagePlacement="left"
							>
								<p>
									Our imagined solution includes the following
									features:
								</p>
								<ol>
									<li>Power button</li>
									<li>
										Left & right touch panels to capture
										sliding & tapping actions
									</li>
									<li>Two front-facing cameras</li>
									<li>
										Expandable/retractable components to fit
										differently sized individuals
									</li>
									<li>
										Hollow frame is functional on it’s own
										but also fits over glasses
									</li>
								</ol>
							</TextImage>

							<TextImage
								subheading="Iteration"
								imageAlt="giant eagle glasses"
								image="giantEagle/glassesIteration.png"
								addImageShadow={false}
								addComponentShadow={false}
							>
								<p>
									Hardware was revised with thicker frames to
									better accommodate mechanical components.
								</p>
							</TextImage>
							{/* </div> */}
						</section>
					</FadeSection>

					<FadeSection scrollDir={scrollDir}>
						<section className="flex flex-col gap-10 mt-5 ">
							<div className="">
								<TextImage
									heading="interactions & gestures"
									imageAlt="giant eagle glasses"
									image="giantEagle/glassesInteractions.png"
									addImageShadow={false}
									addComponentShadow={false}
								>
									<p>
										Users may make these 3 gestures on
										either of the glasses’ touch panels to
										interact with UI elements.
									</p>
								</TextImage>
							</div>
						</section>
					</FadeSection>

					<FadeSection scrollDir={scrollDir}>
						<section className="py-[50px] w-full max-w-screen-lg mx-auto ">
							<TextGroup heading="overall functionality" />
							<section className="columns-1 sm:columns-2 md:columns-3 gap-5 space-y-5 mt-5">
								<StickyNote>
									<div>
										<p className="line-through decoration-[1px] text-yellow-600">
											View full shopping list
										</p>
										<p className="font-semibold">
											View current item only
										</p>
									</div>
									<p>
										Carousels & scrollable lists created too
										much visual clutter, which we're trying
										to cut down on.
									</p>
								</StickyNote>

								<StickyNote>
									<div>
										<p className="line-through decoration-[1px] text-yellow-600">
											Edit shopping list
										</p>
										<p className="font-semibold">
											Skip/delete current item
										</p>
									</div>
									<p>
										Fully editing capabilities (searching,
										reordering, etc.) would introduce too
										much complexity and require more
										granular controls, suggesting bulkier
										hardware.
									</p>
								</StickyNote>

								<StickyNote>
									<div>
										<p className="line-through decoration-[1px] text-yellow-600">
											Receieve recommendations for generic
											items in-experience
										</p>
										<p className="font-semibold">
											No in-experience recommendations
										</p>
									</div>
									<p>
										Meant to solve for cases where users add
										"bread" to their list, we planned to use
										pre-set preferences to make suggestions
										for specific products while shopping -
									</p>
									<p>
										But providng personalized
										recommendations would be most effective
										during in-app shopping list creation.
									</p>
								</StickyNote>

								<StickyNote>
									<p className="font-semibold">
										Control basic experience settings
									</p>

									<p>
										In addition to being able to configure
										settings in-app, users should be able to
										make adjustments from inside the
										experience.
									</p>
								</StickyNote>

								<StickyNote>
									<p className="font-semibold">Way-finding</p>
									<p>
										Though users can change how they prefer
										to navigate the store through in-app
										settings, the experience guides them
										along the most optimized route by
										default.
									</p>
								</StickyNote>
							</section>
						</section>
					</FadeSection>

					<FadeSection scrollDir={scrollDir}>
						<section className="py-[50px] w-full max-w-screen-lg mx-auto">
							<TextGroup heading="components & ui design">
								{/* <p>
									Division Platform is a flexible,
									WordPress-based web framework developed to
									support Penguin Random House's diverse
									publishing divisions and imprints.
								</p> */}
							</TextGroup>
							<section className="flex flex-col gap-10 mt-5 ">
								<TextImage
									subheading="Main Informational Component"
									imageAlt="giant eagle glasses"
									image="giantEagle/infoComponentVariants.png"
									addImageShadow={false}
									addComponentShadow={false}
									imagePlacement="bottom"
								>
									<p>
										When a user’s list includes{" "}
										<strong>more than 1 item</strong>, the
										current & next item are both shown. When
										a user’s list includes{" "}
										<strong>1 item</strong>, only the
										current item is shown. When a user{" "}
										<strong>
											has picked up everything
										</strong>{" "}
										on their list, they are directed to the
										checkout counter.
									</p>
								</TextImage>
								<TextImage
									subheading="Setting Controls"
									imageAlt="giant eagle glasses"
									image="giantEagle/settingsComponent.png"
									addImageShadow={false}
									addComponentShadow={false}
									imagePlacement="bottom"
								>
									<p>
										The user may interact with the settings
										menu through the gestures mentioned
										previously.
									</p>
									<p>
										<strong>
											Sliding along either of the touch
											panels
										</strong>{" "}
										will progress them through the available
										configuration options.{" "}
										<strong>Tapping once</strong> will allow
										them to select a specific setting or
										setting option o configure.{" "}
										<strong>Double tapping</strong> will
										move them back into the previous state.
									</p>
								</TextImage>
								<TextImage
									subheading="Product Filter"
									imageAlt="giant eagle glasses"
									image="giantEagle/productFilter.png"
									addComponentShadow={false}
									imagePlacement="right"
									mat={false}
								>
									<p>
										The product filter serves to diminish
										the distractions created by a constant
										bombardment of text & colors on
										packaging, as well as to keep users
										focused on the specific item they need
										as opposed to the endless options
										available.
									</p>
									<p>
										Users can adjust the opacity of the
										filter to their desired level either
										in-app or through the experience’s
										settings menu.
									</p>
								</TextImage>
							</section>
						</section>
					</FadeSection>

					<FadeSection scrollDir={scrollDir}>
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
					</FadeSection>

					<FadeSection scrollDir={scrollDir}>
						<section className="py-[50px] w-full max-w-screen-lg mx-auto ">
							<TextGroup heading="other considerations & caveats">
								<AccordionItem
									heading="Buisness Implications"
									isOpenDefault={true}
								>
									<p>
										We recognize that essentially “hiding”
										the vast majority of items may not be
										seen to be in GE’s best interest -
										retail relies on enticing shoppers by
										keeping products in plain view.
									</p>
									<p>
										We would like to make the case that
										making stores more accessible to people
										of varied sensitivities is a smarter
										business move than forcing them to
										endure an uncomfortable experience.
									</p>
									<p>
										Investing in the comfort of customers is
										likely to strengthen overall trust &
										loyalty over time.
									</p>
								</AccordionItem>
								<AccordionItem heading="Reliance on Unchanging Organization">
									Lorem ipsum blah blah blah
								</AccordionItem>
								<AccordionItem heading="Assumptions of Ability">
									<p>
										In order to interact with the glasses’
										controls,{" "}
										<strong>
											users will need to (at least
											briefly) have one hand free
										</strong>
										. Looking into providing a voice-control
										option could be a helpful alternative.
									</p>
									<p>
										<strong>
											As a medium, AR assumes some level
											of visual acuity
										</strong>
										. However, the auditory component of the
										experience & it’s reliance on the
										contract of bright signals in a dulled
										environment may still make it suitable
										for those with partial/reduced vision.
									</p>
									<p>
										<strong>
											Subtitles/CC are not provided with
											the experience
										</strong>
										, because audio is a purely optional
										feature. The experience is, by default,
										accessible to the hearing-impaired.
									</p>
								</AccordionItem>
								<AccordionItem heading="(Current) Technological Limitations">
									<p>
										We acknowledge that our experience
										assumes a level of performance just
										beyond the current capabilities of AR
										devices. However, we imagine that, with
										constant advancement in the field, these
										limitations will decrease in a few short
										years.
									</p>
									<p>
										<strong>Field of view (FoV)</strong>{" "}
										will likely expand RayNeo X2’s currently
										have a FoV of 25°, but the industry
										average is about 30-50°
									</p>
									<p>
										<strong>Resolutio</strong>n will likely
										increase RayNeo X2’s currently have a
										resolution of 640x480 per eye, but the
										RayNeo Air 3S XREAL One both reach
										1920x1080
									</p>
								</AccordionItem>
							</TextGroup>
							<section className="flex flex-col gap-10 mt-5 "></section>
						</section>
					</FadeSection>
				</div>
			</main>
		</>
	);
};

export default GiantEagle;
