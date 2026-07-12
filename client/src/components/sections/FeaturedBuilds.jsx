import featuredBuilds from "../../data/featuredBuilds";
import BuildCard from "../ui/BuildCard";

export default function FeaturedBuilds(){
    return(
        <section>
            {/* Title Row */}

            <div>
                <h2>Featured Builds</h2>

                <button>
                    View All
                </button>
            </div>

            {/* Cards */}

            <div>
                {featuredBuilds.map((build)=>(
                    <BuildCard
                        key={build.id}
                        build={build}
                    />
                ))}
            </div>

        </section>
    );
}