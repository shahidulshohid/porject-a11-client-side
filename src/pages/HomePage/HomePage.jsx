import { useEffect } from "react";
import BannerSection from "../../components/BannerSection/BannerSection";
import VolunteerNeedsSection from "../../components/VolunteerNeedsSection/VolunteerNeedsSection";
import img1 from "../../assets/review1.jpg";
import img2 from "../../assets/review2.jpg";
import img4 from "../../assets/review4.jpg";

const HomePage = () => {
  useEffect(() => {
    document.title = "Home page | Volunteer management";
  }, []);
  return (
    <div>
      <BannerSection></BannerSection>
      <VolunteerNeedsSection></VolunteerNeedsSection>
      {/* extra section one  */}
      <section>
        <div className="bg-white w-full lg:w-4/12 mx-auto p-3 mb-6 rounded-xl">
          <h3 className="text-3xl text-gray-600 text-center font-bold mb-2">
            Volunteering FAQs{" "}
          </h3>
          <p className="text-center text-gray-500">
            Got a question about volunteering? We’ve answered some of the
            frequently asked questions from volunteers here:
          </p>
        </div>

        <div className="join join-vertical w-full bg-white">
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium">
            Can I claim benefits while volunteering?
            </div>
            <div className="collapse-content">
              <p>Yes. Claimants of welfare benefits such as Jobseekers Allowance, Income Support, Employment and Support Allowance, Incapacity Benefit and Disability Living Allowance are allowed to volunteer without losing their benefits. However, you must make sure that you are available to meet the conditions of receiving those benefits. We recommend that you tell your volunteer coordinator that you are claiming benefits, especially if there is a chance your situation could change at short notice, for example if you are seeking paid work.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
      </section>
      {/* extra section two  */}
      <section className="my-12 w-11/12 mx-auto">
        <h3 className="text-3xl text-white text-center font-bold">Reviews</h3>
        <p className="text-center text-white mb-3">
          A reviews volunteer is someone who dedicates their time and effort to
          help gather, write, <br /> evaluate, or manage reviews for various
          purposes
        </p>
        <div className="divider mb-6">OR</div>
        <div className="lg:flex justify-center gap-12">
          <div className="w-full mb-6 lg:mb-0 lg:w-4/12 bg-white p-4 rounded-xl">
            <p className="mb-4">
              Volunteer Management: An Overview Volunteer management refers to
              the systematic process of recruiting, training, organizing, and
              supporting individuals
            </p>
            <div className="flex items-center gap-5">
              <div>
                <img
                  className="w-20 h-20 rounded-full object-cover"
                  src={img2}
                  alt=""
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Md Anisul Haque</h2>
                <p>Communication Office RFL Bangladesh</p>
              </div>
            </div>
          </div>
          <div className="w-full mb-6 lg:mb-0 lg:w-4/12 bg-white p-4 rounded-xl">
            <p className="mb-4">
              Volunteer Management: An Overview Volunteer management refers to
              the systematic process of recruiting, training, organizing, and
              supporting individuals
            </p>
            <div className="flex items-center gap-5">
              <div>
                <img
                  className="w-20 h-20 rounded-full object-cover"
                  src={img4}
                  alt=""
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Md Mamunur Rasid</h2>
                <p>Communication Office PRAN Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mb-6 lg:mb-0 lg:w-4/12 mx-auto bg-white p-4 rounded-xl mt-6">
          <p className="mb-4">
            Volunteer Management: An Overview Volunteer management refers to the
            systematic process of recruiting, training, organizing, and
            supporting individuals
          </p>
          <div className="flex items-center gap-5">
            <div>
              <img
                className="w-20 h-20 rounded-full object-cover"
                src={img1}
                alt=""
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Abdur Mamunul Haque</h2>
              <p>Communication Office UNICEF Bangladesh</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
