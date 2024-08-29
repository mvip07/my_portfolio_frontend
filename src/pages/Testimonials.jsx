import styled from "styled-components";
import User from "../assets/img/user.png"

export const Testimonials = () => {
    return (
        <TestimonialsP id="testimonials" className="testimonials section">
            <h2 className="section-title">Testimonials</h2>
            <p className="section-description">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                sint. Velit officia consequat duis enim velit mollit. lorem ipsum
            </p>
            <div className="comments">
                <div className="comment">
                    <div className="user">
                        <img className="user-img" src={User} alt="User Image" />
                        <div className="user-flex">
                            <h4 className="user-name">James Gouse</h4>
                            <span className="user-profession">Graphic Designer</span>
                        </div>
                    </div>
                    <p className="user-comment">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
                        diam in ac dictum a urna viverra morbi. Morbi donec amet....
                    </p>
                    <div className="stars">
                        <i className="icon bx bxs-star"></i>
                        <i className="icon bx bxs-star"></i>
                        <i className="icon bx bxs-star"></i>
                        <i className="icon bx bxs-star-half"></i>
                        <i className="icon bx bx-star"></i>
                    </div>
                </div>
                <div className="comment">
                    <div className="user">
                        <img className="user-img" src={User} alt="User Image" />
                        <div className="user-flex">
                            <h4 className="user-name">James Gouse</h4>
                            <span className="user-profession">Graphic Designer</span>
                        </div>
                    </div>
                    <p className="user-comment">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
                        diam in ac dictum a urna viverra morbi. Morbi donec amet....
                    </p>
                    <div className="stars">
                        <i className="icon bx bxs-star"></i>
                        <i className="icon bx bxs-star"></i>
                        <i className="icon bx bxs-star"></i>
                        <i className="icon bx bxs-star-half"></i>
                        <i className="icon bx bx-star"></i>
                    </div>
                </div>
                <div className="comment">
                    <div className="user">
                        <img className="user-img" src={User} alt="User Image" />
                        <div className="user-flex">
                            <h4 className="user-name">James Gouse</h4>
                            <span className="user-profession">Graphic Designer</span>
                        </div>
                    </div>
                    <p className="user-comment">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla
                        diam in ac dictum a urna viverra morbi. Morbi donec amet....
                    </p>
                    <div className="stars">
                        <i className="icon bx bxs-star"></i>
                        <i className="icon bx bxs-star"></i>
                        <i className="icon bx bxs-star"></i>
                        <i className="icon bx bxs-star-half"></i>
                        <i className="icon bx bx-star"></i>
                    </div>
                </div>
            </div>
        </TestimonialsP>
    );
};

const TestimonialsP = styled.div`
    .comments {
        gap: 24px;
        display: grid;
        margin-top: 50px;
        grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
    }

    .comment {
        width: 100%;
        height: 323px;
        padding: 25px;
        border-radius: 12px;
        background: var(--white);
    }

    .stars {
        gap: 10px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    .stars .icon {
        font-size: 22px;
        color: var(--mainCl);
    }

    .user-comment {
        opacity: 60%;
        margin: 24px 0;
        font-size: 16px;
        font-weight: 400;
        text-align: left;
        line-height: 24px;
        color: var(--black);
    }

    .user-flex {
        gap: 13px;
        display: flex;
        align-items: center;
    }

    .user-img {
        width: 64px;
        height: 64px;
    }

    .user-name {
        font-size: 18px;
        font-weight: 600;
        line-height: 28px;
        color: var(--black);
        text-transform: capitalize;
    }

    .user-profession {
        opacity: 60%;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: var(--black);
    }
`;