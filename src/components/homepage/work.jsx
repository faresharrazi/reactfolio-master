import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = ({ type }) => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./microsoft.png"
								alt="microsoft"
								className="work-image"
							/>
							<div className="work-title">Microsoft</div>
							<div className="work-duration">
								Jan 2023 - Present
							</div>
							<div className="work-subtitle">
								Teams B2B Support Engineer
							</div>
						</div>

						<div className="work">
							<img
								src="./dropbox.png"
								alt="dropbox"
								className="work-image"
							/>
							<div className="work-duration">
								Jan 2017 - Jan 2023
							</div>
							<div className="work-title">Dropbox</div>

							<div className="work-subtitle">
								Team manager & Escalation Support Engineer
							</div>
						</div>

						<div className="work">
							<img
								src="./kaspersky.png"
								alt="kaspersky"
								className="work-image"
							/>
							<div className="work-title">Kaspersky Lab</div>
							<div className="work-subtitle">
								Frontline Technical Support Engineer
							</div>
							<div className="work-duration">
								Jun 2015 - Jan 2017
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
