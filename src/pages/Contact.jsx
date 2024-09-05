import styled from "styled-components";

export const Contact = () => {
	return (
		<ContactP id="contact" className="contacts piece section">
			<h2 className="section-title">Get In Touch</h2>
			<p className="section-description">
				Reach out for collaborations, project inquiries, or consultations. I'm available via email, phone, or social media, and always eager to connect with like-minded professionals. Let’s discuss how we can work together to achieve your goals.			</p>
			<div className="contact-flex">
				<div className="send-message">
					<div className="form">
						<h2 className="form-title">Leave us your info</h2>
						<div className="flex-group">
							<div className="form-group">
								<label className="form-label" htmlFor="fullname">Your Name*</label>
								<input className="form-input" type="text" id="fullname" name="fullname" required />
							</div>
							<div className="form-group">
								<label className="form-label" htmlFor="email">Your Email*</label>
								<input className="form-input" type="email" id="email" name="email" required />
							</div>
						</div>
						<div className="form-group">
							<label className="form-label" htmlFor="subject">Your Subject</label>
							<input className="form-input" type="text" id="subject" name="subject" />
						</div>
						<div className="form-group">
							<label className="form-label" htmlFor="message">Your Message</label>
							<textarea className="form-input" name="message" id="message" rows="12"></textarea>
						</div>
						<button className="submit-btn">Send Message</button>
					</div>
				</div>
				<div className="contact-information">
					<div className="contact-card">
						<div className="item">
							<div className="circle">
								<i className="bx bx-location-plus"></i>
							</div>
							<div className="body">
								<div className="body-flex">
									<p className="title">Country:</p>
									<span className="description">Uzbekistan</span>
								</div>
								<div className="body-flex">
									<p className="title">City:</p>
									<span className="description">Tashkent</span>
								</div>
								{/* <div className="body-flex">
									<p className="title">Streat:</p>
									<span className="description">35 vhatara, Badda</span>
								</div> */}
							</div>
						</div>
						<div className="item">
							<div className="circle">
								<i className="bx bxs-message-alt"></i>
							</div>
							<div className="body">
								<div className="body-flex">
									<p className="title">Email:</p>
									<span className="description">ozodovmirabzal07@gmail.com</span>
								</div>
								<div className="body-flex">
									<p className="title">Telegram:</p>
									<span className="description">@mvip_07</span>
								</div>
								{/* <div className="body-flex">
									<p className="title">Skype:</p>
									<span className="description">@yourusername</span>
								</div> */}
							</div>
						</div>
						<div className="item">
							<div className="circle">
								<i className="bx bxs-phone"></i>
							</div>
							<div className="body">
								<div className="body-flex">
									<p className="title">Office:</p>
									<span className="description">+998 (91) 166 21 25</span>
								</div>
								<div className="body-flex">
									<p className="title">Personal:</p>
									<span className="description">+998 (91) 166 21 25</span>
								</div>
								{/* <div className="body-flex">
									<p className="title">Support services:</p>
									<span className="description">15369</span>
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</ContactP>
	);
};

const ContactP = styled.div`
    .contact-flex {
		gap: 24px;
		width: 100%;
		height: 100%;
		display: flex;
		margin-top: 70px;
		align-items: stretch;
    }

    .send-message {
     	width: 60%;
		height: 100%;
    }

	.form {
		width: 100%;
		height: 100%;
		padding: 40px;
		border-radius: 12px;
		background: var(--white);
	}

	.form-title {
		font-size: 20px;
		font-weight: 700;
		line-height: 28px;
		text-align: left;
		color: var(--black);
		margin-bottom: 24px;
	}

	.flex-group {
		gap: 24px;
		width: 100%;
		display: flex;
		align-items: flex-start;
	}

	.form-group {
		width: 100%;
	}

	.form-label {
		opacity: 80%;
		display: block;
		font-size: 14px;
		font-weight: 400;
		text-align: left;
		line-height: 20px;
		margin-bottom: 8px;
		color: var(--black);
		font-family: "Inter";
	}

	.send-message .form-group:nth-child(3) {
		margin: 20px 0;
	}

	.form-input {
		border: 0;
		outline: 0;
		width: 100%;
		border-radius: 8px;
		padding: 12px 16px;
		background: var(--darkWhite);
	}

	textarea {
		resize: none;
	}

	.submit-btn {
		border: 0;
		outline: 0;
		font-size: 16px;
		font-weight: 500;
		margin-top: 24px;
		line-height: 24px;
		border-radius: 8px;
		padding: 12px 20px;
		text-align: center;
		color: var(--white);
		background: var(--mainCl);
	}

	.contact-information {
		width: 40%;
	}

	.contact-card {
		height: 100%;
		display: flex;
		flex-wrap: wrap;
	}
 
	.item {
		width: 100%;
		padding: 24px;
		margin-top: 32px;
		border-radius: 12px;
		background: var(--white);
	}

	.item:first-child {
		margin-top: 0;
	}

	.circle {
		width: 40px;
		height: 40px;
		display: flex;
		margin: 0 auto;
		border-radius: 50%;
		align-items: center;
		justify-content: center;
		background: var(--mainCl);
	}

	.circle i {
		font-size: 20px;
		color: var(--white);
	}

	.body {
		margin-top: 24px;
	}

	.body-flex {
		margin: 6px 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.body-flex .title {
		opacity: 1;
		font-size: 14px;
		font-weight: 400;
		line-height: 20px;
		color: var(--black);
		text-transform: capitalize;
	}

	.body-flex .description {
		opacity: 60%;
		font-size: 14px;
		font-weight: 400;
		line-height: 20px;
		color: var(--black);
	}

	@media (max-width: 992px) {
		.contact-flex {
			display: block;
		}

		.send-message,
		.contact-information {
     		width: 100%;
    	} 

		.contact-information {
			margin-top: 32px;
		}
	}


	@media (max-width: 768px) {
		.form {
			padding: 24px;
		}

		.send-message .flex-group {
			display: block;
		}

		.send-message .form-group:nth-child(2) {
			margin-top: 24px;
		}
	}
`;
