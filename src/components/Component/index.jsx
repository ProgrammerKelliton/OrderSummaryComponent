import "./style.scss";
import Illustration from "../../assets/image/illustration-hero.svg";
import IconMusic from "../../assets/icon/icon-music.svg";

export default function Component() {
    return (
        <div className="Component">
            <img
                className="Component__illustration"
                src={Illustration}
                alt="illustration"
            />
            <h1 className="Component__title">Order Summary</h1>

            <p className="Component__description">
                You can now listen to millions of songs, audiobooks, and
                podcasts on any device anywhere you like!{" "}
            </p>

            <div className="Component__info">
                <img className="info__icon" src={IconMusic} alt="icon music" />

                <div className="info__pay">
                    <h2 className="pay__plan">Annual Plan</h2>
                    <span className="pay__price">$59.99/year</span>
                </div>

                <a href="#" className="info__changePlan">
                    Change
                </a>
            </div>

            <button className="Component__buy">Proceed to Payment</button>
            <a href="#" className="Component__cancel">
                Cancel Order
            </a>
        </div>
    );
}
