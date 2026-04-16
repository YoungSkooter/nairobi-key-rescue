import ghostKeys from "@/assets/ghost-keys.jpg";
import keyUpgrade from "@/assets/key-upgrade.jpg";
import shellKey from "@/assets/shell-key.jpg";
import ecuRemap from "@/assets/ecu-remap.jpg";
import keyProgramming from "@/assets/key-programming.jpg";
import toyotaKey from "@/assets/toyota-key-upgrade.jpg";
import mitsubishiKey from "@/assets/mitsubishi-key.jpg";
import flipKey from "@/assets/flip-key-replacement.webp";

const images = [
  { src: toyotaKey, alt: "Toyota smart key replacement on site" },
  { src: mitsubishiKey, alt: "Mitsubishi car key duplication" },
  { src: flipKey, alt: "Flip key replacement service" },
  { src: ghostKeys, alt: "Ghost key security service" },
  { src: keyProgramming, alt: "Key programming services" },
  { src: keyUpgrade, alt: "Car key upgrade" },
  { src: shellKey, alt: "Shell key replacement" },
  { src: ecuRemap, alt: "ECU remapping service" },
];

const GallerySection = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container px-4">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-center uppercase mb-12 text-foreground">
          Our <span className="text-primary">Work</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {images.map((img) => (
            <div key={img.alt} className="rounded-lg overflow-hidden aspect-square">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
