import type { NextPage } from "next";
import RootLayout from "@modules/shared/features/layout/RootLayout";
import PokemonContainer from "@modules/pokemon/features/containers/PokemonContainer";

const IndexPage: NextPage = () => {
    return (
        <RootLayout>
            <PokemonContainer />
        </RootLayout>
    );
};

export default IndexPage;