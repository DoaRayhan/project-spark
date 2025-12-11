export const BrandLogos = () => {
  const brands = [
    { name: "Hooli", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/120px-Google_2015_logo.svg.png" },
    { name: "Lyft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Lyft_logo.svg/120px-Lyft_logo.svg.png" },
    { name: "Leaf", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/120px-Netflix_2015_logo.svg.png" },
    { name: "Stripe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/120px-Stripe_Logo%2C_revised_2016.svg.png" },
    { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/120px-Amazon_Web_Services_Logo.svg.png" },
    { name: "Reddit", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Reddit_logo_new.svg/120px-Reddit_logo_new.svg.png" }
  ];

  return (
    <section className="py-12 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
          {brands.map((brand) => (
            <div key={brand.name} className="h-8 grayscale hover:grayscale-0 transition-all">
              <img 
                src={brand.logo} 
                alt={brand.name}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};