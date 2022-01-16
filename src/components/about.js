import Header from "./header";
import Footer from "./footer";
export default function About(params) {
  return (
    <>
      <Header />
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 ">
              <div class="h-full bg-gray-50 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text -center relative">
                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  About Us
                </h1>
                <p class="leading-relaxed mb-3">
                  Acommunity of scholars and technocrats bridging gaps between
                  design thinking stages to deliver desired living ages one at a
                  time. Your presence is clear indication that your ideas are
                  wide and dignified. Hence, it promises to be an exciting
                  journey here via the philosophy of, “Osi taa di mma.” This is
                  the right first step on your springboard of unbounded dreams.
                </p>
                <p class="leading-relaxed mb-3">
                  You are therefore welcome to OSITA Intl’ Institute, a maieutic
                  school of creativity, where potentiality meets with actuality.
                  It’s in you, we only facilitate.
                </p>
                <p class="leading-relaxed mb-3">
                  Take a course and thank you for having us.
                </p>

                <br />
                <p class="leading-relaxed mb-3">
                  “I saw the angel in the marble and carved until I set [them]
                  free.”
                </p>
                <p class="leading-relaxed pl-10 mb-3">~Michelangelo</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
