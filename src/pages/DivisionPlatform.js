import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Chip from "../components/Chip";
import TextGroup from "../components/TextGroup";
import TextImage from "../components/TextImage";
import ProjectCard from "../components/ProjectCard";
import FadeSnapSection from "../components/FadeSnapSection";

const DivisionPlatform = () => {
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
										{skills.map((tag, i) => (
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
							<TextGroup heading="Contributions"></TextGroup>

							<section className="flex flex-col gap-10 mt-5 ">
								<TextImage
									// heading="Team List Module"
									subheading="Audiobook Share Modal"
									image="prhProjects/audioModal1.png"
									imageAlt="audio modal 1"
									imagePlacement="left"
								>
									<p className="mt-3">
										In addition to allowing authors to share
										social links pointing the the audio
										download, the audiobook share modal
										embed allows the WCA to showcase an
										embeddable audio player on a site.
									</p>
									<ul>
										<li>
											The embed section of the modal
											presents an option to choose between
											embeddable player layouts: Square or
											Rectangle.
										</li>
										<li>
											When a choice is made, the
											corresponding preview appears.
										</li>
										<li>
											The iframe code for the selected
											widget is provided, as well as a
											button for copying the HTML.
										</li>
										<li>
											When the button is clicked, the
											iframe code is copied to the
											device’s clipboard, and the toast
											notification ‘HTML Copied’ appears.
										</li>
									</ul>
								</TextImage>

								<TextImage
									subheading="Team List Module"
									image="prhProjects/teamList1.png"
									imageAlt="team list 1"
									imagePlacement="left"
								>
									<p className="mt-3">
										The Team List Module allows the WCA to
										display a selection of Team Members
										(created via a custom WordPress post
										type) in a list format.
									</p>
									<ul>
										<li>
											The block can be inserted into any
											page via the Gutenberg editor & may
											include one or an unlimited number
											of Team Members.
										</li>
										<li>
											From the editor, a WCA can build a
											list by adding Team Members using
											the Team Member Name.
										</li>
										<li>
											When entered, the Team Member Name
											and Photo appear in the page editor.
											Team Members may be re-ordered
											within the module.
										</li>
										<li>
											On the front-end, the Team Member
											Photo, Bio, and Carousel (if
											applicable) appear in a list with
											the Team Member Name and Job Title
										</li>
									</ul>
								</TextImage>

								<TextImage
									subheading="Logo Banner Module"
									image="prhProjects/logoBanner1.png"
									imageAlt="logo banner 1"
									imagePlacement="left"
								>
									<p className="mt-3">
										This custom Gutenberg block can be
										inserted into any page or post. Users
										can manipulate the following settings:
									</p>
									<ul>
										<li>Image</li>
										<li>Layout (stacked v. split)</li>
										<li>
											Orientation (for split layout only;
											left v. right)
										</li>
										<li>
											Base style (default, Bump Up, or
											Curved)
										</li>
										<li>Background Color</li>
										<li>Headline text & color</li>
										<li>Body text & color</li>
										<li>
											CTA (button/text link or social
											media insert)
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

export default DivisionPlatform;
