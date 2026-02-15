export function FeaturedOn() {
    const logos = [
        { src: "/logos/fortune.webp", alt: "Fortune" },
        { src: "/logos/bbc.webp", alt: "BBC" },
        { src: "/logos/moneycontrol.webp", alt: "MoneyControl" },
        { src: "/logos/economic times.webp", alt: "The Economic Times" },
        { src: "/logos/mint.webp", alt: "Mint" },
        { src: "/logos/ndtv.webp", alt: "NDTV" },
    ];

    // Create a quadrupled list to ensure smooth infinite scroll on all screen sizes
    const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

    return (
        <section className="py-12 bg-secondary/20 border-y border-border/40 overflow-hidden">
            <div className="w-full">
                <p className="text-center text-sm md:text-base uppercase tracking-widest text-muted-foreground mb-10 font-semibold opacity-70">
                    As Featured On
                </p>

                <div className="marquee-container">
                    <div className="marquee-content">
                        {marqueeLogos.map((logo, index) => (
                            <img
                                key={index}
                                src={logo.src}
                                alt={logo.alt}
                                className="h-10 md:h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
