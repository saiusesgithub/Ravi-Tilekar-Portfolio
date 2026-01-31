export function FeaturedOn() {
    return (
        <section className="py-10 bg-secondary/20 border-y border-border/40">
            <div className="container">
                <p className="text-center text-sm md:text-base uppercase tracking-widest text-muted-foreground mb-8 font-semibold">
                    As Featured On
                </p>
                <div className="flex items-center justify-between gap-2 md:gap-3 lg:gap-4 max-w-full overflow-hidden">
                    <img
                        src="/logos/fortune.webp"
                        alt="Fortune"
                        className="h-5 md:h-7 lg:h-9 w-auto max-w-[14%] object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink"
                    />
                    <img
                        src="/logos/bbc.webp"
                        alt="BBC"
                        className="h-5 md:h-7 lg:h-9 w-auto max-w-[14%] object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink"
                    />
                    <img
                        src="/logos/moneycontrol.webp"
                        alt="MoneyControl"
                        className="h-5 md:h-7 lg:h-9 w-auto max-w-[14%] object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink"
                    />
                    <img
                        src="/logos/economic times.webp"
                        alt="The Economic Times"
                        className="h-5 md:h-7 lg:h-9 w-auto max-w-[14%] object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink"
                    />
                    <img
                        src="/logos/mint.webp"
                        alt="Mint"
                        className="h-5 md:h-7 lg:h-9 w-auto max-w-[14%] object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink"
                    />
                    <img
                        src="/logos/ndtv.webp"
                        alt="NDTV"
                        className="h-5 md:h-7 lg:h-9 w-auto max-w-[14%] object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink"
                    />
                </div>
            </div>
        </section>
    );
}
