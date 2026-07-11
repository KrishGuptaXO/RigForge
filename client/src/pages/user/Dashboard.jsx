import BuildCard from "../../components/ui/BuildCard";
import featuredBuilds from "../../data/featuredBuilds";

export default function Dashboard(){
    return (
        <div>
            <h2 className="text-2xl font-bold text-white">
                <div className="flex gap-6">
                    {featuredBuilds.map((build) => (
                        <BuildCard build={build} />
                    ))}
                </div>

            </h2>
        </div>
    );
}