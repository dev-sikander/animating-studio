// Import Fonts
import ConditionalLayout from "./ConditionalLayout";
import { primary } from "./configs/fonts";
// Import Components  

// Import Css
import "./global.css";
// Meta Data
export const metadata = {
    // Title & Descriptions
    title: "Premium Video Animation Services | Animating Studio",
    description: "Embrace the juncture and vivify your narrative through impeccable craftsmanship, alongside an all-inclusive suite of video animation and 3D animation services.",
    // Canonical
    alternates: { canonical: 'https://animating-studio.vercel.app/' },
    // OG Metas
    openGraph: {
        title: "Premium Video Animation Services | Animating Studio",
        description: "Embrace the juncture and vivify your narrative through impeccable craftsmanship, alongside an all-inclusive suite of video animation and 3D animation services.",
        url: 'https://animating-studio.vercel.app/',
        siteName: 'Animating Studio',
        locale: 'en_US',
        type: 'website',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">

            <body className={`${primary.variable}`}>
                <ConditionalLayout>
                    <main>{children}</main>
                </ConditionalLayout>
            </body>

        </html>
    );
}
