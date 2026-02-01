// Comprehensive Plant Disease Knowledge Base
// Contains all 15 crops and 50+ diseases with symptoms, treatments, and prevention

export interface DiseaseInfo {
  id: string;
  name: string;
  scientificName: string;
  crop: string;
  symptoms: string[];
  causes: string[];
  treatment: string[];
  prevention: string[];
  severity: "low" | "medium" | "high" | "critical";
  spreadRate: "slow" | "moderate" | "fast";
  affectedParts: string[];
  faqs: { q: string; a: string }[];
}

export interface CropInfo {
  id: string;
  name: string;
  scientificName: string;
  diseases: DiseaseInfo[];
}

export const knowledgeBase: CropInfo[] = [
  {
    id: "tomato",
    name: "Tomato",
    scientificName: "Solanum lycopersicum",
    diseases: [
      {
        id: "tomato_early_blight",
        name: "Early Blight",
        scientificName: "Alternaria solani",
        crop: "tomato",
        symptoms: [
          "Dark brown spots with concentric rings (target-like pattern)",
          "Yellow halos around spots",
          "Lower leaves affected first",
          "Leaf drop and defoliation",
          "Dark lesions on stems"
        ],
        causes: [
          "Fungal pathogen Alternaria solani",
          "Warm humid conditions (24-29°C)",
          "Overhead irrigation",
          "Poor air circulation",
          "Infected plant debris"
        ],
        treatment: [
          "Apply copper-based fungicides (Bordeaux mixture)",
          "Use chlorothalonil or mancozeb sprays",
          "Remove and destroy infected leaves immediately",
          "Improve air circulation by pruning",
          "Apply neem oil for organic treatment"
        ],
        prevention: [
          "Use certified disease-free seeds",
          "Practice 3-year crop rotation",
          "Mulch to prevent soil splash",
          "Water at base of plants, avoid wetting leaves",
          "Space plants adequately for air flow"
        ],
        severity: "medium",
        spreadRate: "moderate",
        affectedParts: ["leaves", "stems", "fruit"],
        faqs: [
          { q: "Is early blight contagious?", a: "Yes, it spreads through wind-borne spores and water splash. Infected leaves can spread it to healthy plants." },
          { q: "Can I eat tomatoes from infected plants?", a: "Yes, if the fruit itself is not affected. Remove any damaged portions before consumption." }
        ]
      },
      {
        id: "tomato_late_blight",
        name: "Late Blight",
        scientificName: "Phytophthora infestans",
        crop: "tomato",
        symptoms: [
          "Water-soaked gray-green spots on leaves",
          "White fuzzy mold on leaf undersides",
          "Rapid browning and death of foliage",
          "Brown firm rot on fruit",
          "Entire plant can collapse within days"
        ],
        causes: [
          "Oomycete pathogen Phytophthora infestans",
          "Cool wet weather (10-20°C)",
          "High humidity above 90%",
          "Infected potato or tomato debris",
          "Windborne spores from nearby infected fields"
        ],
        treatment: [
          "Apply copper hydroxide immediately",
          "Use systemic fungicides like metalaxyl",
          "Remove and burn all infected plants",
          "Do not compost infected material",
          "Apply preventive fungicide to remaining plants"
        ],
        prevention: [
          "Plant resistant varieties (Legend, Defiant)",
          "Avoid overhead irrigation",
          "Destroy volunteer potato and tomato plants",
          "Monitor weather for blight-favorable conditions",
          "Apply preventive fungicides during wet periods"
        ],
        severity: "critical",
        spreadRate: "fast",
        affectedParts: ["leaves", "stems", "fruit"],
        faqs: [
          { q: "Can late blight be cured?", a: "No, once a plant is heavily infected, it cannot be saved. Focus on protecting uninfected plants." },
          { q: "How fast does late blight spread?", a: "Very fast - it can destroy an entire field within 1-2 weeks under favorable conditions." }
        ]
      },
      {
        id: "tomato_leaf_mold",
        name: "Leaf Mold",
        scientificName: "Passalora fulva",
        crop: "tomato",
        symptoms: [
          "Pale green to yellow spots on upper leaf surface",
          "Olive-green to brown velvety growth on leaf underside",
          "Leaves curl and wither",
          "Severe defoliation in humid conditions",
          "Reduced fruit production"
        ],
        causes: [
          "Fungal pathogen Passalora fulva (formerly Cladosporium fulvum)",
          "High humidity (>85%)",
          "Poor ventilation in greenhouses",
          "Temperatures 22-24°C optimal",
          "Overcrowded plantings"
        ],
        treatment: [
          "Improve greenhouse ventilation immediately",
          "Apply sulfur-based fungicides",
          "Remove heavily infected leaves",
          "Reduce humidity with proper spacing",
          "Use biofungicides containing Bacillus subtilis"
        ],
        prevention: [
          "Grow resistant varieties",
          "Maintain humidity below 85%",
          "Ensure good air circulation",
          "Avoid leaf wetness",
          "Sanitize greenhouse between crops"
        ],
        severity: "medium",
        spreadRate: "moderate",
        affectedParts: ["leaves"],
        faqs: [
          { q: "Does leaf mold affect fruit?", a: "Rarely directly, but severe defoliation reduces fruit quality and yield." },
          { q: "Is this common in open fields?", a: "Less common outdoors; it primarily affects greenhouse tomatoes." }
        ]
      },
      {
        id: "tomato_septoria",
        name: "Septoria Leaf Spot",
        scientificName: "Septoria lycopersici",
        crop: "tomato",
        symptoms: [
          "Small circular spots (1.5-3mm) with dark borders",
          "Gray or tan centers with tiny black dots (pycnidia)",
          "Lower leaves affected first",
          "Severe yellowing and leaf drop",
          "Plants may become completely defoliated"
        ],
        causes: [
          "Fungal pathogen Septoria lycopersici",
          "Warm wet conditions (20-25°C)",
          "Splashing rain or irrigation",
          "Infected plant debris from previous season",
          "Prolonged leaf wetness"
        ],
        treatment: [
          "Apply chlorothalonil or copper fungicides",
          "Remove infected lower leaves",
          "Avoid working with wet plants",
          "Apply mancozeb as contact fungicide",
          "Use potassium bicarbonate for organic option"
        ],
        prevention: [
          "Rotate crops for 2-3 years",
          "Use drip irrigation instead of overhead",
          "Mulch to prevent soil splash",
          "Remove all plant debris after harvest",
          "Stake plants to improve air circulation"
        ],
        severity: "medium",
        spreadRate: "moderate",
        affectedParts: ["leaves", "stems"],
        faqs: [
          { q: "How can I tell septoria from early blight?", a: "Septoria spots are smaller (1.5-3mm) with visible black dots in the center, while early blight spots are larger with concentric rings." },
          { q: "Does septoria affect fruit?", a: "Not directly, but defoliation leads to sunscald and reduced fruit quality." }
        ]
      },
      {
        id: "tomato_mosaic",
        name: "Tomato Mosaic Virus",
        scientificName: "Tomato mosaic virus (ToMV)",
        crop: "tomato",
        symptoms: [
          "Mottled light and dark green patterns on leaves",
          "Leaf distortion and curling",
          "Stunted growth",
          "Reduced fruit size and quality",
          "Fernleaf appearance in severe cases"
        ],
        causes: [
          "Viral infection by ToMV",
          "Mechanical transmission through handling",
          "Contaminated tools and equipment",
          "Infected seeds",
          "Tobacco products (smokers' hands)"
        ],
        treatment: [
          "No cure exists - remove infected plants",
          "Do not touch healthy plants after infected ones",
          "Disinfect all tools with 10% bleach solution",
          "Wash hands thoroughly with soap",
          "Control aphid vectors with insecticidal soap"
        ],
        prevention: [
          "Use certified virus-free seeds",
          "Plant resistant varieties",
          "Wash hands before handling plants",
          "Disinfect tools between plants",
          "Do not smoke near tomato plants"
        ],
        severity: "high",
        spreadRate: "fast",
        affectedParts: ["leaves", "fruit", "entire plant"],
        faqs: [
          { q: "Can mosaic virus be cured?", a: "No, there is no cure. Infected plants should be removed to prevent spread." },
          { q: "Is it safe to save seeds from infected plants?", a: "No, the virus can be seed-borne. Always use certified disease-free seeds." }
        ]
      },
      {
        id: "tomato_yellow_curl",
        name: "Yellow Leaf Curl Virus",
        scientificName: "Tomato yellow leaf curl virus (TYLCV)",
        crop: "tomato",
        symptoms: [
          "Severe upward curling of leaves",
          "Yellowing of leaf margins",
          "Stunted bushy growth",
          "Flower drop and no fruit set",
          "Plants may appear like broccoli"
        ],
        causes: [
          "Begomovirus transmitted by whiteflies",
          "Whitefly (Bemisia tabaci) feeding",
          "Infected transplants",
          "Nearby infected weed hosts",
          "Warm dry conditions favoring whiteflies"
        ],
        treatment: [
          "Remove and destroy infected plants immediately",
          "Control whiteflies with imidacloprid or pyrethroids",
          "Use yellow sticky traps for monitoring",
          "Apply neem oil or insecticidal soap",
          "Introduce beneficial insects (Encarsia formosa)"
        ],
        prevention: [
          "Use TYLCV-resistant varieties",
          "Install fine mesh (50-mesh) around nurseries",
          "Remove weed hosts around fields",
          "Avoid planting near older infected crops",
          "Use reflective mulches to deter whiteflies"
        ],
        severity: "critical",
        spreadRate: "fast",
        affectedParts: ["leaves", "entire plant"],
        faqs: [
          { q: "Will my plant recover?", a: "No, plants infected early will not produce marketable fruit. Late infections may produce some yield." },
          { q: "How do I know if whiteflies are present?", a: "Shake plant leaves - if small white insects fly up, whiteflies are present. Check leaf undersides for nymphs." }
        ]
      },
      {
        id: "tomato_healthy",
        name: "Healthy",
        scientificName: "N/A",
        crop: "tomato",
        symptoms: [
          "Uniform green color",
          "Vigorous growth",
          "No spots or discoloration",
          "Normal leaf shape and size"
        ],
        causes: [],
        treatment: [],
        prevention: [
          "Maintain regular watering schedule",
          "Apply balanced fertilizer",
          "Monitor for early signs of disease",
          "Practice good sanitation"
        ],
        severity: "low",
        spreadRate: "slow",
        affectedParts: [],
        faqs: []
      }
    ]
  },
  {
    id: "potato",
    name: "Potato",
    scientificName: "Solanum tuberosum",
    diseases: [
      {
        id: "potato_early_blight",
        name: "Early Blight",
        scientificName: "Alternaria solani",
        crop: "potato",
        symptoms: [
          "Dark brown lesions with concentric rings",
          "Target-like appearance on leaves",
          "Lower and older leaves affected first",
          "Lesions on tubers are dark and sunken",
          "Premature defoliation"
        ],
        causes: [
          "Fungus Alternaria solani",
          "Warm temperatures (24-29°C)",
          "Extended wet periods",
          "Stressed plants more susceptible",
          "Infected seed tubers"
        ],
        treatment: [
          "Apply chlorothalonil preventively",
          "Use mancozeb or copper fungicides",
          "Remove infected plant material",
          "Improve plant vigor with proper nutrition",
          "Apply azoxystrobin for systemic control"
        ],
        prevention: [
          "Use certified disease-free seed potatoes",
          "Practice 2-3 year rotation",
          "Maintain adequate soil fertility",
          "Avoid overhead irrigation",
          "Destroy volunteer potatoes and nightshade weeds"
        ],
        severity: "medium",
        spreadRate: "moderate",
        affectedParts: ["leaves", "stems", "tubers"],
        faqs: [
          { q: "Does early blight affect potato yield?", a: "Yes, severe defoliation can reduce yield by 20-30%." },
          { q: "Can I eat potatoes from infected plants?", a: "Yes, if tubers are not affected. Cut away any dark lesions." }
        ]
      },
      {
        id: "potato_late_blight",
        name: "Late Blight",
        scientificName: "Phytophthora infestans",
        crop: "potato",
        symptoms: [
          "Water-soaked pale green to brown spots",
          "White cottony growth on leaf undersides",
          "Rapid plant death in wet weather",
          "Brown rot in tubers",
          "Foul smell from rotting tissue"
        ],
        causes: [
          "Oomycete Phytophthora infestans",
          "Cool moist conditions (12-18°C)",
          "High humidity and fog",
          "Infected seed tubers",
          "Spores from nearby tomato or potato fields"
        ],
        treatment: [
          "Apply metalaxyl-based fungicides immediately",
          "Use mancozeb or chlorothalonil preventively",
          "Remove and destroy all infected plants",
          "Kill vines 2-3 weeks before harvest",
          "Do not wash tubers before storage"
        ],
        prevention: [
          "Plant resistant varieties (Kennebec, Elba)",
          "Use certified disease-free seed",
          "Monitor weather forecasts",
          "Apply preventive fungicides during high-risk periods",
          "Destroy cull piles and volunteers"
        ],
        severity: "critical",
        spreadRate: "fast",
        affectedParts: ["leaves", "stems", "tubers"],
        faqs: [
          { q: "Is late blight the same as the Irish Potato Famine disease?", a: "Yes, Phytophthora infestans caused the devastating Irish Potato Famine of 1845-1849." },
          { q: "Can I save infected tubers for seed?", a: "Never. Infected tubers will rot in storage or spread disease next season." }
        ]
      },
      {
        id: "potato_healthy",
        name: "Healthy",
        scientificName: "N/A",
        crop: "potato",
        symptoms: [
          "Dark green foliage",
          "Strong stems",
          "No spots or lesions",
          "Vigorous growth"
        ],
        causes: [],
        treatment: [],
        prevention: [
          "Use certified seed potatoes",
          "Maintain proper hilling",
          "Water consistently",
          "Monitor regularly for pests and diseases"
        ],
        severity: "low",
        spreadRate: "slow",
        affectedParts: [],
        faqs: []
      }
    ]
  },
  {
    id: "grape",
    name: "Grape",
    scientificName: "Vitis vinifera",
    diseases: [
      {
        id: "grape_black_rot",
        name: "Black Rot",
        scientificName: "Guignardia bidwellii",
        crop: "grape",
        symptoms: [
          "Tan circular leaf spots with dark borders",
          "Black pycnidia in lesion centers",
          "Fruit turns brown, then shrivels to hard black mummy",
          "Shoot lesions (cankers)",
          "Tendrils and stems can be infected"
        ],
        causes: [
          "Fungus Guignardia bidwellii",
          "Warm wet spring weather",
          "Overwintered mummified fruit",
          "Rain splash dispersal",
          "Extended leaf wetness (6+ hours)"
        ],
        treatment: [
          "Apply mancozeb or captan at bud break",
          "Use myclobutanil during bloom",
          "Remove mummified fruit from vines and ground",
          "Apply protective fungicides through fruit set",
          "Improve canopy airflow through pruning"
        ],
        prevention: [
          "Remove and destroy all mummies before spring",
          "Prune for open canopy",
          "Apply dormant copper spray",
          "Choose resistant varieties",
          "Maintain spray program from bud break through veraison"
        ],
        severity: "high",
        spreadRate: "moderate",
        affectedParts: ["leaves", "fruit", "shoots"],
        faqs: [
          { q: "Can I make wine from partially affected grapes?", a: "No, black rot gives wine an off-flavor. Remove all affected clusters." },
          { q: "When is the critical period for infection?", a: "From bloom through 3-4 weeks after, when fruit is most susceptible." }
        ]
      },
      {
        id: "grape_esca",
        name: "Esca (Black Measles)",
        scientificName: "Phaeomoniella chlamydospora complex",
        crop: "grape",
        symptoms: [
          "Tiger-stripe pattern on leaves (green and yellow stripes)",
          "Leaf scorching from margins",
          "Small dark spots on berries (measles)",
          "Sudden vine death (apoplexy)",
          "Wood shows dark streaking when cut"
        ],
        causes: [
          "Complex of fungi including Phaeomoniella, Phaeoacremonium",
          "Infection through pruning wounds",
          "Stress conditions trigger symptoms",
          "Old vineyards more susceptible",
          "Wet weather during pruning season"
        ],
        treatment: [
          "No effective chemical cure exists",
          "Trunk renewal by retraining suckers",
          "Remedial surgery (remove infected wood)",
          "Apply wound protectants after pruning",
          "Reduce plant stress"
        ],
        prevention: [
          "Protect pruning wounds with fungicide paste",
          "Prune during dry weather",
          "Avoid large pruning cuts",
          "Use double pruning method",
          "Remove and burn severely affected vines"
        ],
        severity: "high",
        spreadRate: "slow",
        affectedParts: ["leaves", "fruit", "trunk", "cordons"],
        faqs: [
          { q: "Will my vine die from esca?", a: "Possibly. Some vines show symptoms for years, others die suddenly (apoplexy)." },
          { q: "Is esca spreading in my vineyard?", a: "Yes, but slowly. It spreads mainly through pruning tools and wounds." }
        ]
      },
      {
        id: "grape_leaf_blight",
        name: "Leaf Blight",
        scientificName: "Pseudocercospora vitis",
        crop: "grape",
        symptoms: [
          "Angular brown spots on leaves",
          "Spots may have yellow halos",
          "Premature leaf drop",
          "Reduced vine vigor",
          "Lower canopy most affected"
        ],
        causes: [
          "Fungus Pseudocercospora vitis (formerly Isariopsis clavispora)",
          "Warm wet weather",
          "Dense canopy with poor airflow",
          "Overwintered infected leaves",
          "Humid conditions"
        ],
        treatment: [
          "Apply mancozeb or copper-based fungicides",
          "Improve canopy management",
          "Remove fallen leaves",
          "Apply strobilurin fungicides if severe",
          "Increase spray frequency in wet weather"
        ],
        prevention: [
          "Prune for open canopy",
          "Remove leaf litter after harvest",
          "Maintain good drainage",
          "Choose less susceptible varieties",
          "Apply dormant sprays"
        ],
        severity: "medium",
        spreadRate: "moderate",
        affectedParts: ["leaves"],
        faqs: [
          { q: "Does leaf blight affect fruit quality?", a: "Indirectly - severe defoliation can reduce sugar accumulation and vine health." },
          { q: "Is this the same as downy mildew?", a: "No, they're different diseases with different pathogens and symptoms." }
        ]
      },
      {
        id: "grape_healthy",
        name: "Healthy",
        scientificName: "N/A",
        crop: "grape",
        symptoms: [
          "Uniform green leaves",
          "Proper fruit development",
          "No spots or discoloration",
          "Vigorous cane growth"
        ],
        causes: [],
        treatment: [],
        prevention: [
          "Regular canopy management",
          "Proper nutrition program",
          "Consistent irrigation",
          "Regular monitoring for pests and diseases"
        ],
        severity: "low",
        spreadRate: "slow",
        affectedParts: [],
        faqs: []
      }
    ]
  },
  {
    id: "apple",
    name: "Apple",
    scientificName: "Malus domestica",
    diseases: [
      {
        id: "apple_scab",
        name: "Apple Scab",
        scientificName: "Venturia inaequalis",
        crop: "apple",
        symptoms: [
          "Olive-green to brown velvety spots on leaves",
          "Spots later turn dark and corky",
          "Scabby lesions on fruit surface",
          "Severe infections cause leaf curling and drop",
          "Cracked and distorted fruit"
        ],
        causes: [
          "Fungus Venturia inaequalis",
          "Cool wet spring weather",
          "Overwintered infected leaves",
          "Extended leaf wetness periods",
          "Rain splash spreads spores"
        ],
        treatment: [
          "Apply captan or myclobutanil from green tip",
          "Use mancozeb during primary scab season",
          "Remove and destroy fallen leaves",
          "Apply DMI fungicides (myclobutanil, fenbuconazole)",
          "Continue sprays through petal fall"
        ],
        prevention: [
          "Plant resistant varieties (Liberty, Enterprise)",
          "Apply urea to fallen leaves in autumn",
          "Remove leaf litter",
          "Prune for open canopy",
          "Monitor weather and adjust spray program"
        ],
        severity: "high",
        spreadRate: "moderate",
        affectedParts: ["leaves", "fruit"],
        faqs: [
          { q: "Are scabby apples safe to eat?", a: "Yes, they're edible but less attractive. Scab is a cosmetic issue on fruit." },
          { q: "When is apple scab most dangerous?", a: "From green tip through about 3 weeks after petal fall - the primary scab season." }
        ]
      },
      {
        id: "apple_black_rot",
        name: "Black Rot",
        scientificName: "Botryosphaeria obtusa",
        crop: "apple",
        symptoms: [
          "Purple spots on leaves enlarging to 'frog-eye' pattern",
          "Spots have brown centers and purple margins",
          "Fruit rot starts at wound or calyx end",
          "Mummified black fruit remains on tree",
          "Cankers on branches"
        ],
        causes: [
          "Fungus Botryosphaeria obtusa",
          "Warm wet weather",
          "Fire blight cankers provide entry points",
          "Mummified fruit releases spores",
          "Stressed trees more susceptible"
        ],
        treatment: [
          "Apply captan or mancozeb fungicides",
          "Remove and destroy mummified fruit",
          "Prune out cankered limbs",
          "Apply fungicides from pink through second cover",
          "Maintain tree vigor"
        ],
        prevention: [
          "Remove mummies and fallen fruit",
          "Prune out dead and cankered wood",
          "Control fire blight to reduce entry wounds",
          "Maintain proper tree nutrition",
          "Avoid wounding fruit during handling"
        ],
        severity: "medium",
        spreadRate: "slow",
        affectedParts: ["leaves", "fruit", "branches"],
        faqs: [
          { q: "Can black rot spread in storage?", a: "Yes, infected fruit can rot and spread to adjacent fruit in storage." },
          { q: "What's the difference between black rot and bitter rot?", a: "Black rot starts firm and progresses; bitter rot starts soft with concentric rings." }
        ]
      },
      {
        id: "apple_cedar_rust",
        name: "Cedar Apple Rust",
        scientificName: "Gymnosporangium juniperi-virginianae",
        crop: "apple",
        symptoms: [
          "Yellow-orange spots on upper leaf surface",
          "Orange pustules (aecia) on leaf underside",
          "Spots on fruit near calyx",
          "Premature defoliation in severe cases",
          "Reduced fruit size and quality"
        ],
        causes: [
          "Rust fungus requiring two hosts (apple and cedar/juniper)",
          "Spores travel from cedar galls in spring",
          "Wet warm weather during bloom",
          "Proximity to Eastern red cedar trees",
          "Extended wetness allows infection"
        ],
        treatment: [
          "Apply myclobutanil at pink bud stage",
          "Use mancozeb or ferbam as protectant",
          "Continue sprays through second cover",
          "Remove cedar galls within 2 miles if possible",
          "Apply wettable sulfur (organic option)"
        ],
        prevention: [
          "Plant rust-resistant varieties (Redfree, Liberty)",
          "Remove nearby cedar/juniper trees if feasible",
          "Prune galls from cedars in winter",
          "Maintain regular spray program during high-risk period",
          "Monitor local cedar trees for gall development"
        ],
        severity: "medium",
        spreadRate: "slow",
        affectedParts: ["leaves", "fruit"],
        faqs: [
          { q: "Why can't I just spray the cedar trees?", a: "Spraying cedars is impractical. Focus protection on the apple trees during spore release." },
          { q: "How far do rust spores travel?", a: "Spores can travel 1-2 miles, so nearby cedars are the main concern." }
        ]
      },
      {
        id: "apple_healthy",
        name: "Healthy",
        scientificName: "N/A",
        crop: "apple",
        symptoms: [
          "Clean green foliage",
          "Smooth unblemished fruit",
          "No spots or lesions",
          "Normal leaf shape"
        ],
        causes: [],
        treatment: [],
        prevention: [
          "Maintain regular spray program",
          "Proper pruning for air circulation",
          "Balanced fertilization",
          "Regular orchard sanitation"
        ],
        severity: "low",
        spreadRate: "slow",
        affectedParts: [],
        faqs: []
      }
    ]
  },
  {
    id: "maize",
    name: "Corn (Maize)",
    scientificName: "Zea mays",
    diseases: [
      {
        id: "maize_cercospora",
        name: "Gray Leaf Spot (Cercospora)",
        scientificName: "Cercospora zeae-maydis",
        crop: "maize",
        symptoms: [
          "Rectangular gray to tan lesions parallel to veins",
          "Lesions have distinct parallel edges",
          "Lower leaves affected first",
          "Lesions coalesce causing large dead areas",
          "Grayish sporulation on lesion surface"
        ],
        causes: [
          "Fungus Cercospora zeae-maydis",
          "Warm humid conditions",
          "Continuous corn cultivation",
          "Minimum or no-till practices",
          "Infected corn residue"
        ],
        treatment: [
          "Apply strobilurin or triazole fungicides",
          "Spray at VT/R1 stage for best results",
          "Improve air circulation",
          "Consider rescue fungicide if caught early",
          "Scout regularly and spray at first sign"
        ],
        prevention: [
          "Plant resistant hybrids",
          "Rotate with non-host crops",
          "Bury or remove corn residue",
          "Avoid continuous corn",
          "Plant hybrids with different maturity dates"
        ],
        severity: "high",
        spreadRate: "moderate",
        affectedParts: ["leaves"],
        faqs: [
          { q: "What yield loss can gray leaf spot cause?", a: "Severe infections can reduce yield by 20-40% if upper leaves are affected before grain fill." },
          { q: "When is the critical period for fungicide?", a: "Around tasseling (VT) and silking (R1) when ear leaf and above are at risk." }
        ]
      },
      {
        id: "maize_common_rust",
        name: "Common Rust",
        scientificName: "Puccinia sorghi",
        crop: "maize",
        symptoms: [
          "Small cinnamon-brown pustules on both leaf surfaces",
          "Pustules arranged in clusters",
          "Powdery spore release when rubbed",
          "Yellow halos around pustules",
          "Severe infections cause leaf death"
        ],
        causes: [
          "Fungus Puccinia sorghi",
          "Moderate temperatures (15-25°C)",
          "High humidity and dew",
          "Windborne spores from southern regions",
          "Extended wet conditions"
        ],
        treatment: [
          "Apply triazole or strobilurin fungicides",
          "Spray when pustules first appear",
          "Scout lower canopy for early detection",
          "Time application before tassel",
          "Consider severity and growth stage"
        ],
        prevention: [
          "Plant resistant hybrids",
          "Monitor for early detection",
          "Avoid late planting (more susceptible)",
          "Check regional rust reports",
          "Early-maturing hybrids escape late-season rust"
        ],
        severity: "medium",
        spreadRate: "fast",
        affectedParts: ["leaves"],
        faqs: [
          { q: "Is common rust different from southern rust?", a: "Yes - common rust pustules are on both leaf surfaces and are darker; southern rust is more yellow-orange and mainly on upper surface." },
          { q: "Does common rust occur every year?", a: "It varies - spores must blow in from the south each year. Cool, humid summers favor it." }
        ]
      },
      {
        id: "maize_northern_blight",
        name: "Northern Corn Leaf Blight",
        scientificName: "Exserohilum turcicum",
        crop: "maize",
        symptoms: [
          "Long cigar-shaped gray-green lesions (2.5-15 cm)",
          "Lesions start on lower leaves",
          "Lesions may coalesce killing entire leaves",
          "Dark gray sporulation on lesion surface in humid conditions",
          "Premature death of upper leaves in severe cases"
        ],
        causes: [
          "Fungus Exserohilum turcicum",
          "Moderate temperatures (18-27°C)",
          "Heavy dew and wet weather",
          "Continuous corn production",
          "Infected corn debris"
        ],
        treatment: [
          "Apply strobilurin or triazole fungicides at first signs",
          "Target application at VT-R1 stage",
          "Scout lower canopy in V8-V12",
          "Consider fungicide if 50%+ plants have lesions reaching ear leaf",
          "Use aerial application for tall corn"
        ],
        prevention: [
          "Plant resistant hybrids with Ht genes",
          "Rotate crops (corn-soybean)",
          "Till under corn residue",
          "Plant hybrids with different resistance genes",
          "Avoid continuous corn"
        ],
        severity: "high",
        spreadRate: "moderate",
        affectedParts: ["leaves"],
        faqs: [
          { q: "How much yield can I lose to NCLB?", a: "If leaves above the ear are affected before grain fill, losses can exceed 30%." },
          { q: "What's the difference between NCLB and southern leaf blight?", a: "NCLB lesions are larger (cigar-shaped) and gray-green; southern leaf blight lesions are smaller with tan centers and darker borders." }
        ]
      },
      {
        id: "maize_healthy",
        name: "Healthy",
        scientificName: "N/A",
        crop: "maize",
        symptoms: [
          "Uniform green color",
          "No lesions or spots",
          "Strong stalk development",
          "Normal ear formation"
        ],
        causes: [],
        treatment: [],
        prevention: [
          "Plant quality seed from reputable source",
          "Proper fertility management",
          "Optimal plant population",
          "Scout regularly throughout season"
        ],
        severity: "low",
        spreadRate: "slow",
        affectedParts: [],
        faqs: []
      }
    ]
  },
  {
    id: "rice",
    name: "Rice",
    scientificName: "Oryza sativa",
    diseases: [
      {
        id: "rice_bacterial_blight",
        name: "Bacterial Leaf Blight",
        scientificName: "Xanthomonas oryzae pv. oryzae",
        crop: "rice",
        symptoms: [
          "Water-soaked streaks on leaf margins",
          "Streaks enlarge to yellow then grayish-white lesions",
          "Leaves wilt and turn straw-colored",
          "Bacterial ooze visible in morning dew",
          "Kresek (seedling wilt) in severe cases"
        ],
        causes: [
          "Bacterium Xanthomonas oryzae pv. oryzae",
          "Warm temperatures (25-34°C)",
          "Typhoons and strong rains",
          "High nitrogen fertilization",
          "Infected seed and crop residue"
        ],
        treatment: [
          "No effective chemical control exists",
          "Drain fields to reduce spread",
          "Apply balanced nitrogen fertilizer",
          "Remove severely infected plants",
          "Use copper-based bactericides (limited effect)"
        ],
        prevention: [
          "Plant resistant varieties (Xa genes)",
          "Use certified disease-free seed",
          "Avoid excessive nitrogen",
          "Maintain balanced nutrition",
          "Ensure proper drainage"
        ],
        severity: "high",
        spreadRate: "fast",
        affectedParts: ["leaves", "panicles"],
        faqs: [
          { q: "Can bacterial blight destroy my entire crop?", a: "In severe epidemics with susceptible varieties, yes - yield losses can reach 50-70%." },
          { q: "Is chemical control effective?", a: "No, resistant varieties are the best management strategy." }
        ]
      },
      {
        id: "rice_brown_spot",
        name: "Brown Spot",
        scientificName: "Bipolaris oryzae",
        crop: "rice",
        symptoms: [
          "Oval brown spots with gray centers",
          "Spots have dark brown margins",
          "Leaves may turn yellow and die",
          "Small spots on grain hulls",
          "Poor grain filling"
        ],
        causes: [
          "Fungus Bipolaris oryzae",
          "Nutrient-deficient soils (especially silicon, potassium)",
          "High humidity and temperature",
          "Infected seed",
          "Stressed plants"
        ],
        treatment: [
          "Apply tricyclazole or propiconazole",
          "Improve soil fertility",
          "Apply potash fertilizer",
          "Spray iprodione or mancozeb",
          "Seed treatment with fungicides"
        ],
        prevention: [
          "Use healthy certified seed",
          "Treat seed with fungicides",
          "Apply balanced fertilizers",
          "Maintain proper silicon and potassium levels",
          "Avoid water stress"
        ],
        severity: "medium",
        spreadRate: "moderate",
        affectedParts: ["leaves", "grain"],
        faqs: [
          { q: "Why is brown spot associated with poor soils?", a: "The pathogen is always present but causes disease mainly in nutrient-stressed plants." },
          { q: "Does brown spot affect grain quality?", a: "Yes, infected grains are discolored and may break during milling." }
        ]
      },
      {
        id: "rice_leaf_smut",
        name: "Leaf Smut",
        scientificName: "Entyloma oryzae",
        crop: "rice",
        symptoms: [
          "Slightly raised angular black spots on leaves",
          "Spots have gold or yellow-brown halos",
          "Spots mainly between veins",
          "Leaves may turn yellow and die in severe cases",
          "Powder-like spore masses within spots"
        ],
        causes: [
          "Fungus Entyloma oryzae",
          "Cool temperatures (20-25°C)",
          "High humidity",
          "Shaded and crowded plantings",
          "High nitrogen fertilization"
        ],
        treatment: [
          "Usually not severe enough to require treatment",
          "Apply mancozeb if severe",
          "Improve field drainage",
          "Reduce plant density",
          "Balanced fertilizer application"
        ],
        prevention: [
          "Avoid excessive nitrogen",
          "Maintain proper plant spacing",
          "Ensure good drainage",
          "Remove infected plant debris",
          "Use resistant varieties if available"
        ],
        severity: "low",
        spreadRate: "slow",
        affectedParts: ["leaves"],
        faqs: [
          { q: "Is leaf smut a serious disease?", a: "No, it rarely causes significant yield loss and often doesn't require treatment." },
          { q: "Can leaf smut spread to other crops?", a: "No, Entyloma oryzae is specific to rice." }
        ]
      },
      {
        id: "rice_healthy",
        name: "Healthy",
        scientificName: "N/A",
        crop: "rice",
        symptoms: [
          "Uniform green color",
          "Erect growth habit",
          "No spots or lesions",
          "Normal tillering"
        ],
        causes: [],
        treatment: [],
        prevention: [
          "Use certified seed",
          "Balanced fertilization",
          "Proper water management",
          "Regular field monitoring"
        ],
        severity: "low",
        spreadRate: "slow",
        affectedParts: [],
        faqs: []
      }
    ]
  },
  {
    id: "wheat",
    name: "Wheat",
    scientificName: "Triticum aestivum",
    diseases: [
      {
        id: "wheat_brown_rust",
        name: "Brown (Leaf) Rust",
        scientificName: "Puccinia triticina",
        crop: "wheat",
        symptoms: [
          "Small round orange-brown pustules on leaves",
          "Pustules scattered randomly on upper leaf surface",
          "Leaves yellow and die prematurely",
          "Reduced grain filling",
          "Pustules release orange powdery spores"
        ],
        causes: [
          "Fungus Puccinia triticina",
          "Moderate temperatures (15-22°C)",
          "High humidity and dew",
          "Windborne spores from distant sources",
          "Volunteer wheat and alternate hosts"
        ],
        treatment: [
          "Apply triazole fungicides (propiconazole, tebuconazole)",
          "Spray at first sign of pustules",
          "Consider strobilurin + triazole mix",
          "Target flag leaf protection",
          "Economic threshold: 1 pustule per tiller"
        ],
        prevention: [
          "Plant resistant varieties",
          "Destroy volunteer wheat",
          "Avoid early planting in high-risk areas",
          "Monitor for early detection",
          "Diversify resistance genes in plantings"
        ],
        severity: "high",
        spreadRate: "fast",
        affectedParts: ["leaves"],
        faqs: [
          { q: "What yield loss can brown rust cause?", a: "Severe early infections can reduce yield by 20-40%." },
          { q: "Does brown rust spread to other cereals?", a: "No, Puccinia triticina is specific to wheat." }
        ]
      },
      {
        id: "wheat_yellow_rust",
        name: "Yellow (Stripe) Rust",
        scientificName: "Puccinia striiformis f. sp. tritici",
        crop: "wheat",
        symptoms: [
          "Yellow-orange pustules arranged in stripes along leaf veins",
          "Stripes give striped appearance",
          "Cool-weather rust",
          "Severely infected leaves die rapidly",
          "Heads can be infected"
        ],
        causes: [
          "Fungus Puccinia striiformis f. sp. tritici",
          "Cool temperatures (10-15°C)",
          "High humidity and dew",
          "Windborne spores can travel long distances",
          "Mild winters increase inoculum"
        ],
        treatment: [
          "Apply triazole fungicides immediately when detected",
          "Use strobilurin + triazole combinations",
          "Spray before flag leaf emergence for protection",
          "Scout lower canopy for early signs",
          "May need multiple applications"
        ],
        prevention: [
          "Plant resistant varieties with Yr genes",
          "Avoid early sowing in high-risk areas",
          "Monitor regional rust forecasts",
          "Remove volunteer wheat",
          "Use variety mixtures"
        ],
        severity: "critical",
        spreadRate: "fast",
        affectedParts: ["leaves", "heads"],
        faqs: [
          { q: "Is yellow rust more damaging than brown rust?", a: "Yes, yellow rust develops faster in cool weather and can cause devastating losses if uncontrolled." },
          { q: "Why do I see stripes?", a: "The fungus grows along the vein direction, creating the characteristic striped pattern." }
        ]
      },
      {
        id: "wheat_septoria",
        name: "Septoria Leaf Blotch",
        scientificName: "Zymoseptoria tritici",
        crop: "wheat",
        symptoms: [
          "Tan to brown irregular blotches with dark margins",
          "Small black pycnidia visible in lesions",
          "Lower leaves affected first",
          "Progressive leaf death up the plant",
          "Lesions may coalesce killing entire leaves"
        ],
        causes: [
          "Fungus Zymoseptoria tritici (formerly Septoria tritici)",
          "Cool wet weather",
          "Rain splash spreads spores",
          "Infected wheat stubble",
          "Dense plantings"
        ],
        treatment: [
          "Apply azole or strobilurin fungicides",
          "Time spray before disease moves to upper leaves",
          "T1 spray at GS31-32, T2 at GS39-45",
          "Protect flag leaf and leaf 2",
          "Monitor for azole resistance"
        ],
        prevention: [
          "Plant resistant varieties",
          "Rotate with non-host crops",
          "Bury or remove stubble",
          "Avoid excessive nitrogen early",
          "Increase row spacing for airflow"
        ],
        severity: "high",
        spreadRate: "moderate",
        affectedParts: ["leaves"],
        faqs: [
          { q: "How do I identify septoria from other diseases?", a: "Look for the tiny black dots (pycnidia) inside the tan lesions - this is diagnostic for septoria." },
          { q: "Why is septoria hard to control?", a: "The fungus has developed resistance to some fungicides, and it overwinters abundantly in stubble." }
        ]
      },
      {
        id: "wheat_healthy",
        name: "Healthy",
        scientificName: "N/A",
        crop: "wheat",
        symptoms: [
          "Uniform green color",
          "No pustules or lesions",
          "Normal tillering",
          "Strong stem development"
        ],
        causes: [],
        treatment: [],
        prevention: [
          "Use certified seed",
          "Timely sowing",
          "Balanced fertilization",
          "Regular field scouting"
        ],
        severity: "low",
        spreadRate: "slow",
        affectedParts: [],
        faqs: []
      }
    ]
  },
  {
    id: "cotton",
    name: "Cotton",
    scientificName: "Gossypium hirsutum",
    diseases: [
      {
        id: "cotton_bacterial_blight",
        name: "Bacterial Blight (Angular Leaf Spot)",
        scientificName: "Xanthomonas citri pv. malvacearum",
        crop: "cotton",
        symptoms: [
          "Angular water-soaked spots on leaves",
          "Spots turn brown with age",
          "Veins may turn black (blackarm)",
          "Boll rot in severe cases",
          "Bacterial ooze on young lesions"
        ],
        causes: [
          "Bacterium Xanthomonas citri pv. malvacearum",
          "Rain splash and wind-driven rain",
          "Warm humid conditions",
          "Infected seed",
          "Mechanical damage"
        ],
        treatment: [
          "Apply copper-based bactericides",
          "Spray streptomycin sulfate",
          "Remove severely infected plants",
          "Avoid working in wet fields",
          "Improve field drainage"
        ],
        prevention: [
          "Use acid-delinted certified seed",
          "Plant resistant varieties",
          "Rotate with non-host crops",
          "Avoid overhead irrigation",
          "Destroy crop residues"
        ],
        severity: "medium",
        spreadRate: "moderate",
        affectedParts: ["leaves", "stems", "bolls"],
        faqs: [
          { q: "Does bacterial blight affect fiber quality?", a: "Yes, boll infections can reduce fiber quality and cause boll rot." },
          { q: "Can I save seed from infected plants?", a: "No, seed-borne infection is a major source of disease spread." }
        ]
      },
      {
        id: "cotton_curl_virus",
        name: "Cotton Leaf Curl Virus",
        scientificName: "Cotton leaf curl virus (CLCuV)",
        crop: "cotton",
        symptoms: [
          "Severe upward curling of leaves",
          "Vein thickening and darkening",
          "Enations (outgrowths) on leaf underside",
          "Stunted plants with bushy appearance",
          "Drastically reduced boll formation"
        ],
        causes: [
          "Begomovirus complex transmitted by whiteflies",
          "Whitefly (Bemisia tabaci) vectors",
          "Infected ratoon cotton plants",
          "Weed hosts",
          "High whitefly populations"
        ],
        treatment: [
          "Remove and destroy infected plants",
          "Control whiteflies with imidacloprid or pyriproxyfen",
          "Apply neem-based insecticides",
          "Use sticky traps for monitoring",
          "Spray acetamiprid or thiamethoxam"
        ],
        prevention: [
          "Plant CLCuV-resistant varieties",
          "Remove ratoon cotton and weed hosts",
          "Early sowing to escape peak whitefly",
          "Use border crops to trap whiteflies",
          "Seed treatment with systemic insecticides"
        ],
        severity: "critical",
        spreadRate: "fast",
        affectedParts: ["leaves", "entire plant"],
        faqs: [
          { q: "Will my infected plants recover?", a: "No, infected plants will not recover and should be removed to prevent spread." },
          { q: "What yield loss can CLCuD cause?", a: "Early infections can cause near-total yield loss in susceptible varieties." }
        ]
      },
      {
        id: "cotton_wilt",
        name: "Fusarium Wilt",
        scientificName: "Fusarium oxysporum f. sp. vasinfectum",
        crop: "cotton",
        symptoms: [
          "Yellowing and wilting of leaves",
          "Wilting often on one side of plant first",
          "Brown discoloration of vascular tissue",
          "Stunting and plant death",
          "Lower leaves affected first"
        ],
        causes: [
          "Fungus Fusarium oxysporum f. sp. vasinfectum",
          "Soilborne infection",
          "Root-knot nematode damage increases infection",
          "Warm soil temperatures",
          "Poor drainage"
        ],
        treatment: [
          "No effective chemical treatment",
          "Remove and destroy infected plants",
          "Improve soil drainage",
          "Control nematodes",
          "Soil fumigation may help"
        ],
        prevention: [
          "Plant resistant varieties",
          "Use crop rotation (3-4 years)",
          "Control root-knot nematodes",
          "Maintain soil organic matter",
          "Avoid fields with disease history"
        ],
        severity: "high",
        spreadRate: "slow",
        affectedParts: ["roots", "stems", "leaves"],
        faqs: [
          { q: "Why does wilt affect one side of the plant?", a: "The fungus blocks vascular tissue; uneven colonization affects one side first." },
          { q: "Can I replant cotton in the same field?", a: "Only with resistant varieties; the fungus persists in soil for years." }
        ]
      },
      {
        id: "cotton_healthy",
        name: "Healthy",
        scientificName: "N/A",
        crop: "cotton",
        symptoms: [
          "Dark green foliage",
          "Normal leaf shape",
          "Good boll development",
          "No wilting or yellowing"
        ],
        causes: [],
        treatment: [],
        prevention: [
          "Use quality seed",
          "Proper fertilization",
          "Integrated pest management",
          "Regular scouting"
        ],
        severity: "low",
        spreadRate: "slow",
        affectedParts: [],
        faqs: []
      }
    ]
  },
  {
    id: "orange",
    name: "Orange (Citrus)",
    scientificName: "Citrus sinensis",
    diseases: [
      {
        id: "orange_greening",
        name: "Citrus Greening (HLB)",
        scientificName: "Candidatus Liberibacter asiaticus",
        crop: "orange",
        symptoms: [
          "Blotchy mottle - asymmetric yellowing of leaves",
          "Yellow shoot at one section of canopy",
          "Small lopsided bitter fruit",
          "Fruit remains green at stylar end",
          "Premature fruit drop"
        ],
        causes: [
          "Bacterium Candidatus Liberibacter asiaticus",
          "Asian citrus psyllid (Diaphorina citri) vector",
          "Infected budwood",
          "Long latency period (months to years)",
          "No known cure"
        ],
        treatment: [
          "No cure exists - remove infected trees",
          "Intensive psyllid control (foliar and soil)",
          "Nutritional therapy may prolong tree life",
          "Area-wide psyllid management",
          "Trunk injection with antibiotics (limited approval)"
        ],
        prevention: [
          "Use certified disease-free nursery stock",
          "Control psyllid populations aggressively",
          "Scout and remove symptomatic trees",
          "Use reflective mulch to deter psyllids",
          "Establish windbreaks to reduce psyllid movement"
        ],
        severity: "critical",
        spreadRate: "moderate",
        affectedParts: ["leaves", "fruit", "entire tree"],
        faqs: [
          { q: "Will my tree die from HLB?", a: "Yes, HLB is fatal. Trees decline over several years and become unproductive." },
          { q: "Are the fruit safe to eat?", a: "Yes, but they taste bitter and are unmarketable. HLB is not harmful to humans." }
        ]
      },
      {
        id: "orange_healthy",
        name: "Healthy",
        scientificName: "N/A",
        crop: "orange",
        symptoms: [
          "Uniform dark green foliage",
          "Normal fruit color and size",
          "No mottling or yellowing",
          "Vigorous growth"
        ],
        causes: [],
        treatment: [],
        prevention: [
          "Use certified nursery stock",
          "Regular psyllid monitoring",
          "Balanced nutrition",
          "Proper irrigation"
        ],
        severity: "low",
        spreadRate: "slow",
        affectedParts: [],
        faqs: []
      }
    ]
  },
  {
    id: "chilli",
    name: "Chilli (Pepper)",
    scientificName: "Capsicum annuum",
    diseases: [
      {
        id: "chilli_bacterial_spot",
        name: "Bacterial Spot",
        scientificName: "Xanthomonas campestris pv. vesicatoria",
        crop: "chilli",
        symptoms: [
          "Small water-soaked spots on leaves",
          "Spots turn brown with yellow halos",
          "Raised scab-like spots on fruit",
          "Leaf drop in severe cases",
          "Reduced fruit quality"
        ],
        causes: [
          "Bacterium Xanthomonas campestris pv. vesicatoria",
          "Warm wet weather",
          "Rain splash and overhead irrigation",
          "Infected seed",
          "Working with wet plants"
        ],
        treatment: [
          "Apply copper-based bactericides weekly",
          "Spray streptomycin (where legal)",
          "Remove severely infected plants",
          "Avoid overhead irrigation",
          "Apply during cool dry conditions"
        ],
        prevention: [
          "Use hot-water treated or certified seed",
          "Plant resistant varieties",
          "Avoid working in wet fields",
          "Rotate with non-solanaceous crops",
          "Use drip irrigation"
        ],
        severity: "medium",
        spreadRate: "moderate",
        affectedParts: ["leaves", "fruit", "stems"],
        faqs: [
          { q: "Can I eat peppers with bacterial spot?", a: "Yes, if spots are only on surface. Cut away affected areas." },
          { q: "Does copper work for bacterial spot?", a: "It helps but doesn't cure - use preventively for best results." }
        ]
      },
      {
        id: "chilli_leaf_curl",
        name: "Chilli Leaf Curl Virus",
        scientificName: "Chilli leaf curl virus (ChiLCV)",
        crop: "chilli",
        symptoms: [
          "Upward curling of leaves",
          "Puckering and distortion",
          "Vein yellowing (chlorosis)",
          "Stunted growth",
          "Reduced flowering and fruiting"
        ],
        causes: [
          "Begomovirus transmitted by whiteflies",
          "Whitefly (Bemisia tabaci) feeding",
          "Infected transplants",
          "Weed hosts nearby",
          "Hot dry weather favoring whiteflies"
        ],
        treatment: [
          "Remove and destroy infected plants",
          "Control whiteflies with systemic insecticides",
          "Apply imidacloprid or thiamethoxam",
          "Use neem oil or insecticidal soap",
          "Yellow sticky traps for monitoring"
        ],
        prevention: [
          "Plant resistant varieties",
          "Use virus-free transplants",
          "Remove weed hosts",
          "Install insect-proof net houses",
          "Apply reflective mulches"
        ],
        severity: "high",
        spreadRate: "fast",
        affectedParts: ["leaves", "entire plant"],
        faqs: [
          { q: "Will infected plants produce any fruit?", a: "Severely infected plants produce little to no marketable fruit." },
          { q: "How do I control whiteflies organically?", a: "Use yellow sticky traps, neem oil, and beneficial insects like Encarsia formosa." }
        ]
      },
      {
        id: "chilli_healthy",
        name: "Healthy",
        scientificName: "N/A",
        crop: "chilli",
        symptoms: [
          "Dark green leaves",
          "Normal leaf shape",
          "Good fruit set",
          "Vigorous growth"
        ],
        causes: [],
        treatment: [],
        prevention: [
          "Use healthy transplants",
          "Proper spacing",
          "Balanced fertilization",
          "Regular pest monitoring"
        ],
        severity: "low",
        spreadRate: "slow",
        affectedParts: [],
        faqs: []
      }
    ]
  },
  {
    id: "cucumber",
    name: "Cucumber",
    scientificName: "Cucumis sativus",
    diseases: [
      {
        id: "cucumber_downy_mildew",
        name: "Downy Mildew",
        scientificName: "Pseudoperonospora cubensis",
        crop: "cucumber",
        symptoms: [
          "Angular yellow spots bounded by leaf veins",
          "Grayish-purple fuzzy growth on leaf underside",
          "Spots turn brown and necrotic",
          "Rapid leaf death",
          "Reduced fruit production"
        ],
        causes: [
          "Oomycete Pseudoperonospora cubensis",
          "Cool humid conditions",
          "Windborne spores from distant sources",
          "Extended leaf wetness",
          "Dense plantings"
        ],
        treatment: [
          "Apply mancozeb or chlorothalonil preventively",
          "Use systemic fungicides (cymoxanil, fluopicolide)",
          "Spray at first sign of disease",
          "Alternate fungicide modes of action",
          "Improve air circulation"
        ],
        prevention: [
          "Plant resistant varieties",
          "Avoid late-season plantings",
          "Monitor regional forecasts",
          "Increase plant spacing",
          "Use drip irrigation"
        ],
        severity: "high",
        spreadRate: "fast",
        affectedParts: ["leaves"],
        faqs: [
          { q: "How fast does downy mildew spread?", a: "Very fast - it can destroy a field in 1-2 weeks once established." },
          { q: "Does downy mildew affect fruit?", a: "Not directly, but leaf loss prevents fruit development." }
        ]
      },
      {
        id: "cucumber_powdery_mildew",
        name: "Powdery Mildew",
        scientificName: "Podosphaera xanthii",
        crop: "cucumber",
        symptoms: [
          "White powdery spots on upper leaf surface",
          "Spots expand and coalesce",
          "Leaves yellow and die",
          "May affect stems and petioles",
          "Reduced fruit quality"
        ],
        causes: [
          "Fungus Podosphaera xanthii (or Golovinomyces cichoracearum)",
          "Warm dry conditions (day) with cool humid nights",
          "Dense shaded canopy",
          "Moderate temperatures (20-27°C)",
          "High nitrogen fertilization"
        ],
        treatment: [
          "Apply sulfur-based fungicides",
          "Use DMI fungicides (myclobutanil)",
          "Apply potassium bicarbonate (organic)",
          "Alternate fungicide classes",
          "Remove severely infected leaves"
        ],
        prevention: [
          "Plant resistant varieties",
          "Improve air circulation",
          "Avoid excessive nitrogen",
          "Maintain proper spacing",
          "Apply preventive sprays"
        ],
        severity: "medium",
        spreadRate: "moderate",
        affectedParts: ["leaves", "stems"],
        faqs: [
          { q: "Does powdery mildew need wet leaves?", a: "No, unlike most fungi it thrives in dry conditions with high humidity." },
          { q: "Is there resistance to powdery mildew?", a: "Yes, many resistant varieties are available. Look for PM resistance in variety descriptions." }
        ]
      },
      {
        id: "cucumber_healthy",
        name: "Healthy",
        scientificName: "N/A",
        crop: "cucumber",
        symptoms: [
          "Uniform green leaves",
          "No powdery growth or spots",
          "Vigorous vine growth",
          "Normal fruit development"
        ],
        causes: [],
        treatment: [],
        prevention: [
          "Proper spacing and trellising",
          "Balanced fertilization",
          "Consistent irrigation",
          "Regular scouting"
        ],
        severity: "low",
        spreadRate: "slow",
        affectedParts: [],
        faqs: []
      }
    ]
  },
  {
    id: "strawberry",
    name: "Strawberry",
    scientificName: "Fragaria × ananassa",
    diseases: [
      {
        id: "strawberry_leaf_scorch",
        name: "Leaf Scorch",
        scientificName: "Diplocarpon earlianum",
        crop: "strawberry",
        symptoms: [
          "Small purple spots on upper leaf surface",
          "Spots merge creating 'scorched' appearance",
          "Leaves turn brown and dry",
          "No distinct borders on spots",
          "Petioles and runners may be infected"
        ],
        causes: [
          "Fungus Diplocarpon earlianum",
          "Warm wet weather",
          "Overhead irrigation",
          "Infected plant debris",
          "Crowded plantings"
        ],
        treatment: [
          "Apply captan or thiram fungicides",
          "Remove infected leaves",
          "Renovate beds after harvest",
          "Apply fungicides during wet periods",
          "Use strobilurin fungicides if severe"
        ],
        prevention: [
          "Plant resistant varieties",
          "Use certified disease-free plants",
          "Ensure good air circulation",
          "Avoid overhead irrigation",
          "Remove old leaves after harvest"
        ],
        severity: "medium",
        spreadRate: "moderate",
        affectedParts: ["leaves", "petioles"],
        faqs: [
          { q: "Does leaf scorch affect fruit?", a: "Not directly, but severe defoliation reduces fruit size and quality." },
          { q: "How is leaf scorch different from leaf spot?", a: "Leaf scorch spots have no distinct borders and appear more 'burned'; leaf spot has defined purple borders." }
        ]
      },
      {
        id: "strawberry_healthy",
        name: "Healthy",
        scientificName: "N/A",
        crop: "strawberry",
        symptoms: [
          "Bright green leaves",
          "No spots or browning",
          "Strong runners",
          "Good fruit development"
        ],
        causes: [],
        treatment: [],
        prevention: [
          "Use certified plants",
          "Proper renovation practices",
          "Drip irrigation",
          "Regular fungicide program"
        ],
        severity: "low",
        spreadRate: "slow",
        affectedParts: [],
        faqs: []
      }
    ]
  },
  {
    id: "sugarcane",
    name: "Sugarcane",
    scientificName: "Saccharum officinarum",
    diseases: [
      {
        id: "sugarcane_red_rot",
        name: "Red Rot",
        scientificName: "Colletotrichum falcatum",
        crop: "sugarcane",
        symptoms: [
          "Reddening of internal stalk tissue",
          "White spots in red rotted tissue (diagnostic)",
          "Stalk hollowing and breaking",
          "Sour alcoholic odor from infected stalks",
          "Third and fourth leaves from top wither first"
        ],
        causes: [
          "Fungus Colletotrichum falcatum",
          "Infected seed cane",
          "High humidity and waterlogging",
          "Wounds from borers or cutting",
          "Ratoon crops more susceptible"
        ],
        treatment: [
          "No effective chemical control",
          "Remove and destroy infected clumps",
          "Improve drainage",
          "Use healthy seed cane only",
          "Hot-water treat seed cane (50°C for 2 hours)"
        ],
        prevention: [
          "Plant resistant varieties",
          "Use disease-free seed cane",
          "Avoid waterlogging",
          "Rotate with non-host crops",
          "Limit ratoon cycles"
        ],
        severity: "high",
        spreadRate: "moderate",
        affectedParts: ["stalks", "leaves"],
        faqs: [
          { q: "Can I use infected cane for seed?", a: "Never - this is the main way red rot spreads." },
          { q: "What are the white spots in the red tissue?", a: "These are diagnostic for red rot - they distinguish it from other stalk rots." }
        ]
      },
      {
        id: "sugarcane_rust",
        name: "Orange Rust",
        scientificName: "Puccinia kuehnii",
        crop: "sugarcane",
        symptoms: [
          "Orange-brown pustules on leaf undersides",
          "Yellow-orange flecks on upper surface",
          "Leaves may become chlorotic",
          "Pustules release orange spores when rubbed",
          "Premature leaf death in severe cases"
        ],
        causes: [
          "Fungus Puccinia kuehnii",
          "Moderate temperatures (20-25°C)",
          "High humidity and dew",
          "Windborne spores",
          "Susceptible varieties"
        ],
        treatment: [
          "Apply triazole or strobilurin fungicides",
          "Spray at first sign of pustules",
          "Multiple applications may be needed",
          "Economic threshold: 5% leaf area affected",
          "Consider variety replacement"
        ],
        prevention: [
          "Plant resistant varieties",
          "Monitor for early detection",
          "Remove volunteer sugarcane",
          "Diversify varieties in plantings",
          "Avoid planting in high-risk areas"
        ],
        severity: "medium",
        spreadRate: "moderate",
        affectedParts: ["leaves"],
        faqs: [
          { q: "Is orange rust the same as brown rust?", a: "No, they are different species. Orange rust (P. kuehnii) is more damaging than brown rust (P. melanocephala)." },
          { q: "What yield loss can rust cause?", a: "Severe infections can reduce yield by 10-30% in susceptible varieties." }
        ]
      },
      {
        id: "sugarcane_mosaic",
        name: "Mosaic Virus",
        scientificName: "Sugarcane mosaic virus (SCMV)",
        crop: "sugarcane",
        symptoms: [
          "Light and dark green mottling on leaves",
          "Streaks parallel to leaf veins",
          "Stunted growth",
          "Reduced sugar content",
          "Symptoms most visible on young leaves"
        ],
        causes: [
          "Sugarcane mosaic virus (Potyvirus)",
          "Aphid transmission (many species)",
          "Infected seed cane",
          "Mechanical transmission",
          "Alternative hosts (sorghum, corn)"
        ],
        treatment: [
          "No cure - remove infected plants",
          "Control aphid vectors",
          "Do not use infected cane for planting",
          "Roguing early infections",
          "Maintain isolation from infected fields"
        ],
        prevention: [
          "Plant resistant/tolerant varieties",
          "Use virus-free seed cane",
          "Control aphid populations",
          "Remove infected plants early",
          "Destroy alternative hosts"
        ],
        severity: "medium",
        spreadRate: "moderate",
        affectedParts: ["leaves", "stalks"],
        faqs: [
          { q: "Does mosaic virus reduce sugar yield?", a: "Yes, severely infected cane can have 10-20% lower sugar content." },
          { q: "Can I use affected cane for seed?", a: "No, this perpetuates the virus in your fields." }
        ]
      },
      {
        id: "sugarcane_healthy",
        name: "Healthy",
        scientificName: "N/A",
        crop: "sugarcane",
        symptoms: [
          "Uniform green leaves",
          "Strong stalk development",
          "No mottling or pustules",
          "Vigorous growth"
        ],
        causes: [],
        treatment: [],
        prevention: [
          "Use disease-free seed cane",
          "Proper field drainage",
          "Balanced nutrition",
          "Limit ratoon cycles"
        ],
        severity: "low",
        spreadRate: "slow",
        affectedParts: [],
        faqs: []
      }
    ]
  },
  {
    id: "soybean",
    name: "Soybean",
    scientificName: "Glycine max",
    diseases: [
      {
        id: "soybean_bacterial_blight",
        name: "Bacterial Blight",
        scientificName: "Pseudomonas savastanoi pv. glycinea",
        crop: "soybean",
        symptoms: [
          "Small angular water-soaked spots",
          "Spots turn brown with yellow halos",
          "Centers may fall out giving ragged appearance",
          "Lesions merge in severe cases",
          "Most common after storms"
        ],
        causes: [
          "Bacterium Pseudomonas savastanoi pv. glycinea",
          "Cool wet weather",
          "Wind-driven rain",
          "Infected seed",
          "Crop residue"
        ],
        treatment: [
          "No effective chemical control",
          "Usually self-limiting",
          "Avoid field work when wet",
          "Disease typically stops in warm dry weather",
          "Copper bactericides have limited effect"
        ],
        prevention: [
          "Plant resistant varieties",
          "Use certified seed",
          "Rotate with non-host crops",
          "Till under residue",
          "Avoid mechanical damage"
        ],
        severity: "low",
        spreadRate: "moderate",
        affectedParts: ["leaves"],
        faqs: [
          { q: "Does bacterial blight reduce yield?", a: "Rarely - it usually stops when weather turns warm and dry, causing minimal damage." },
          { q: "Should I spray for bacterial blight?", a: "No, chemical control is not economical or effective." }
        ]
      },
      {
        id: "soybean_frogeye",
        name: "Frogeye Leaf Spot",
        scientificName: "Cercospora sojina",
        crop: "soybean",
        symptoms: [
          "Circular to angular gray spots with reddish-purple borders",
          "Spots have distinct 'frog-eye' appearance",
          "Centers may fall out",
          "Severe infections cause defoliation",
          "Seed infection causes purple seed stain"
        ],
        causes: [
          "Fungus Cercospora sojina",
          "Warm humid weather",
          "Infected seed",
          "Continuous soybean cultivation",
          "Infected residue"
        ],
        treatment: [
          "Apply strobilurin or triazole fungicides",
          "Spray at R3-R4 growth stage",
          "Scout for early detection",
          "Economic threshold: 10% leaf area affected",
          "Seed treatment for planting"
        ],
        prevention: [
          "Plant resistant varieties",
          "Use certified treated seed",
          "Rotate crops",
          "Till under residue",
          "Avoid continuous soybeans"
        ],
        severity: "medium",
        spreadRate: "moderate",
        affectedParts: ["leaves", "pods", "seeds"],
        faqs: [
          { q: "What yield loss can frogeye cause?", a: "Severe infections can reduce yield by 10-30%, especially with susceptible varieties." },
          { q: "Is there fungicide resistance?", a: "Yes, QoI-resistant strains exist. Rotate fungicide modes of action." }
        ]
      },
      {
        id: "soybean_healthy",
        name: "Healthy",
        scientificName: "N/A",
        crop: "soybean",
        symptoms: [
          "Uniform green canopy",
          "No spots or lesions",
          "Normal pod development",
          "Healthy nodulation"
        ],
        causes: [],
        treatment: [],
        prevention: [
          "Use quality seed",
          "Proper inoculation",
          "Balanced fertility",
          "Scout regularly"
        ],
        severity: "low",
        spreadRate: "slow",
        affectedParts: [],
        faqs: []
      }
    ]
  },
  {
    id: "pepper",
    name: "Bell Pepper",
    scientificName: "Capsicum annuum",
    diseases: [
      {
        id: "pepper_bacterial_spot",
        name: "Bacterial Spot",
        scientificName: "Xanthomonas campestris pv. vesicatoria",
        crop: "pepper",
        symptoms: [
          "Small raised water-soaked spots on leaves",
          "Spots turn brown with pale centers",
          "Scab-like raised lesions on fruit",
          "Defoliation in severe cases",
          "Fruit unmarketable due to spots"
        ],
        causes: [
          "Bacterium Xanthomonas campestris pv. vesicatoria",
          "Warm wet conditions",
          "Rain splash",
          "Infected seed",
          "Overhead irrigation"
        ],
        treatment: [
          "Apply copper-based bactericides",
          "Spray every 5-7 days in wet weather",
          "Remove severely infected plants",
          "Use copper + mancozeb mixtures",
          "Apply acibenzolar-S-methyl (plant activator)"
        ],
        prevention: [
          "Use hot-water treated seed",
          "Plant resistant varieties",
          "Avoid overhead irrigation",
          "Rotate with non-solanaceous crops",
          "Use clean transplants"
        ],
        severity: "medium",
        spreadRate: "moderate",
        affectedParts: ["leaves", "fruit"],
        faqs: [
          { q: "Can I eat peppers with bacterial spot?", a: "Yes, if you remove the spotted areas. The spots don't affect edibility." },
          { q: "Why doesn't copper work well?", a: "Copper is protectant only - it must be applied before infection. Some races are also copper-tolerant." }
        ]
      },
      {
        id: "pepper_healthy",
        name: "Healthy",
        scientificName: "N/A",
        crop: "pepper",
        symptoms: [
          "Dark green leaves",
          "Normal leaf shape",
          "Smooth fruit surface",
          "Vigorous growth"
        ],
        causes: [],
        treatment: [],
        prevention: [
          "Use clean transplants",
          "Drip irrigation",
          "Proper spacing",
          "Regular scouting"
        ],
        severity: "low",
        spreadRate: "slow",
        affectedParts: [],
        faqs: []
      }
    ]
  }
];

// Helper functions
export function findDiseaseById(diseaseId: string): DiseaseInfo | undefined {
  for (const crop of knowledgeBase) {
    const disease = crop.diseases.find(d => d.id === diseaseId);
    if (disease) return disease;
  }
  return undefined;
}

export function findDiseaseByCropAndName(cropId: string, diseaseName: string): DiseaseInfo | undefined {
  const crop = knowledgeBase.find(c => c.id === cropId);
  if (!crop) return undefined;
  
  return crop.diseases.find(d => 
    d.name.toLowerCase().includes(diseaseName.toLowerCase()) ||
    diseaseName.toLowerCase().includes(d.name.toLowerCase())
  );
}

export function getCropDiseases(cropId: string): DiseaseInfo[] {
  const crop = knowledgeBase.find(c => c.id === cropId);
  return crop?.diseases || [];
}

export function getAllDiseases(): DiseaseInfo[] {
  return knowledgeBase.flatMap(crop => crop.diseases);
}

export function searchDiseases(query: string): DiseaseInfo[] {
  const lowerQuery = query.toLowerCase();
  const results: DiseaseInfo[] = [];
  
  for (const crop of knowledgeBase) {
    for (const disease of crop.diseases) {
      if (
        disease.name.toLowerCase().includes(lowerQuery) ||
        disease.symptoms.some(s => s.toLowerCase().includes(lowerQuery)) ||
        disease.scientificName.toLowerCase().includes(lowerQuery)
      ) {
        results.push(disease);
      }
    }
  }
  
  return results;
}

// Irrelevant image detection keywords
export const nonPlantKeywords = [
  "person", "human", "face", "car", "vehicle", "building", "architecture",
  "food", "meal", "text", "document", "screen", "phone", "computer",
  "animal", "pet", "cat", "dog", "bird", "furniture", "indoor scene",
  "landscape without plants", "sky only", "water only", "abstract",
  "artwork", "painting", "drawing", "diagram", "chart", "logo"
];

export const plantLeafKeywords = [
  "leaf", "leaves", "plant", "foliage", "crop", "vegetation",
  "stem", "branch", "agriculture", "farm", "garden", "chlorophyll",
  "green plant", "diseased plant", "healthy plant", "infection",
  "spots", "lesion", "blight", "rot", "mildew", "rust"
];
