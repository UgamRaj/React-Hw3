import "./Body.css";
import Button from "../Buttons/Button";

const Body = () => {
  return (
    <>
      <div className="imageContainer">
        <img src="/couple.jpg" alt="Couple" loading="lazy" />
      </div>

      <div className="midContent">
        <h2>Think Health. Think Massage.</h2>
        <p>
          We are open 9am to 6 pm: Monday through Sunday. If you would like to
          schedule an appoinment with us, please call us at 987-654-3210 today!
        </p>

        <div className="btnContainer">
          <Button btnName="LEARN MORE ABOUT US" />
          <Button btnName="CONTACT US TODAY" />
        </div>
      </div>

      <div className="textContent">
        <p className="colorp">
          Are you looking for a professional registered nassage therapist?
          Smaple massage Therapy has 4 registered massage therapists who can
          provide clinical massage
        </p>
        <p>
          We are committed to your term health and well-being. Our
          multi-disciplinary clinic provides a balanced approach to a healthy
          lifestyle. Enhance your health and improve your performance with our
          treatments.
        </p>
        <p>
          We welcome you to come explore all the benefits you'll enjoy as one of
          our valued guests. Our professional staff is committed to offering the
          best massage therapy in mainland
        </p>
        <hr></hr>
      </div>
      <h3>Family Wellness Massage Therapy</h3>
      <p>9876 Main Street, Site 123, Mainland, ML12345</p>
      <p>Phone:987.654.3210</p>
    </>
  );
};
export default Body;
