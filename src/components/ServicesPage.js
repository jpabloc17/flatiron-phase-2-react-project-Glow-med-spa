import Service from "./Service";
function ServicesPage() {
  return (
    <div>
      <Service
        url="https://dimyth.com/wp-content/uploads/2022/06/hydrafacial-product-1.jpg"
        name="HydraFacial"
        price="100"
        details="The invigorating treatment includes deeply cleansing, exfoliating, and extracting and impurities from the skin while simultaneously infusing nourishing ingredients to hydrate the skin."
      />
      <Service
        url="https://dermapen.com/wp-content/uploads/Untitled-1ee-2-500x478.png"
        name="Dermapen Microneedling"
        price="100"
        details="Microneedling is safe for all skin types and promotes care-free healing to address acne scars, fine lines, and wrinkles. It can also be used to decrease the appearance of stretch marks. It's a fast and safe method that initiates the production of collagen and elastin in your skin."
      />
    </div>
  );
}

export default ServicesPage;
