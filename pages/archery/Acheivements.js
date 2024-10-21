const AchievementsSection = () => {
    return (
      <section className="bg-black text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gradientFrom to-gradientTo bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8 animate-fadeIn">
            <div className="space-y-4">
              <img src="/images/trophy1.jpg" alt="Trophy" className="rounded-lg" />
              <p>Regional Archery Champion 2023</p>
            </div>
            <div className="space-y-4">
              <img src="/images/trophy2.jpg" alt="Trophy" className="rounded-lg" />
              <p>Inter-School Tournament Winner 2022</p>
            </div>
            <div className="space-y-4">
              <img src="/images/trophy3.jpg" alt="Trophy" className="rounded-lg" />
              <p>Best Performance in Archery - 2021</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AchievementsSection;