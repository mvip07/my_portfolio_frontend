import { useContext } from "react";
import styled from "styled-components";
import Context from "../component/Context";

export const About = () => {
	const { data } = useContext(Context)

	return (
		<AboutP id="about" className="about piece">
			<div className="user">
				<h1 className="user-name wipe">I'm {data?.about?.name}<br />
					<span className="user-profession">{data?.about?.profession}</span>
				</h1>
				<p className="user-description">{data?.about?.description}</p>

				<div className="btn-group">
					<a href="#" className="hire-me-btn">
						HIRE ME
						<div className="circle">
							<i className="bx bx-right-arrow-alt"></i>
						</div>
					</a>
				</div>
			</div>
			<div className="user-image">
				<img className="user-img" src={data?.about?.image} alt="User Img" />
			</div>
		</AboutP>
	);
};

const AboutP = styled.div`
	gap: 24px;
	display: flex;
	margin-top: 32px;
	padding: 24px 60px;
	align-items: center;
	border-radius: 12px;
	background: var(--white);
	justify-content: space-between;

	.user-name {
		font-size: 36px;
		font-weight: 600;
		line-height: 46px;
		color: var(--black);
		text-transform: capitalize;
	}

	.user-description {
		opacity: 60%;
		font-size: 18px;
		font-weight: 400;
		line-height: 28px;
		color: var(--black);
		margin: 24px 0 32px 0;
	}

	.hire-me-btn {
		gap: 24px;
		border: 0;
		outline: 0;
		font-size: 16px;
		font-weight: 500;
		line-height: 28px;
		align-items: center;
		border-radius: 50px;
		color: var(--white);
		white-space: nowrap;
		display: inline-flex;
		text-decoration: none;
		background: var(--mainCl);
		padding: 6px 6px 6px 28px;
		text-transform: uppercase;
	}

	.hire-me-btn .circle {
		width: 44px;
		height: 44px;
		display: flex;
		border-radius: 50%;
		align-items: center;
		justify-content: center;
		background: var(--black);
	}

	.hire-me-btn .circle i {
		font-size: 28px;
	}

	.user-image {
		height: 400px;
		min-width: 300px;
		max-width: 350px;
		max-height: 460px;
	}

	.user-image .user-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

  	@media (max-width: 1200px) {
		display: block;

		.user {
        	text-align: center;
    	}

		.user-image {
			display: none;
		}
	}
	
	@media (max-width: 768px) {
		margin-top: 0;
		padding: 24px 15px;

		.user-name {
			font-size: 30px;
			line-height: 36px;
		}

		.user-description {
			font-size: 16px;
			line-height: 24px;
		}

		.hire-me-btn .circle {
			width: 33px;
			height: 33px;
		}
	}

	@media (max-width: 576px) {
		.user-name {
			font-size: 28px;
			line-height: 36px;
		}
	}
`;
