import React, { useState } from "react";
import { Link } from "react-router-dom";
// --- Assets ---
import Library from "../assets/photos/e-library.png";
import Cat_Cream from "../assets/photos/cat_cream.png";
import Recipe from "../assets/photos/recipes.png";
import eCommerce from "../assets/photos/e-commerce.png";
import ReadMoreText from "./ReadMoreText";
import autocad from "../assets/photos/CAD.png";
import excle from "../assets/photos/EXCLE-2.png";
import revit from "../assets/photos/revit.png";
import navisworks from "../assets/photos/NAV.png";
import PowerPoint from "../assets/photos/POWERPOINT-2.png";
import Sketchup from "../assets/photos/SKETCHUP.png";
import Etabs from "../assets/photos/etabs.png";
import CapCut from "../assets/photos/CapCut.png";
import SAFE from "../assets/photos/SAFE22.png";
import Vray from "../assets/photos/V-ray.jpg";
import PhotoShop from "../assets/photos/photoshop.png";


// --- One Story Residential Building ---
import A_OneStoryResidentialBuilding from "../assets/photos/projects/A_OneStoryResidentialBuilding.png";
import A_OneStoryResidentialBuilding2 from "../assets/photos/projects/A_OneStoryResidentialBuilding2.png";
import B_OneStoryResidentialBuilding from "../assets/photos/projects/B_OneStoryResidentialBuilding.png";
import B_OneStoryResidentialBuilding2 from "../assets/photos/projects/B_OneStoryResidentialBuilding2.jpg";
import B_OneStoryResidentialBuilding3 from "../assets/photos/projects/B_OneStoryResidentialBuilding3.png";
import B_OneStoryResidentialBuilding4 from "../assets/photos/projects/B_OneStoryResidentialBuilding4.png";

// --- Three and Half Stories ---
import A_ThreeAndHalfStories1 from "../assets/photos/projects/A_Three and Half Stories1.png";
import A_ThreeAndHalfStories2 from "../assets/photos/projects/A_Three and Half Stories2.png";
import A_ThreeAndHalfStories3 from "../assets/photos/projects/A_Three and Half Stories3.png";
import A_ThreeAndHalfStories4 from "../assets/photos/projects/A_Three and Half Stories4.png";
import A_ThreeAndHalfStories5 from "../assets/photos/projects/A_Three and Half Stories5.png";
import B_ThreeAndHalfStories1 from "../assets/photos/projects/B_ThreeAndHalfStories.jpg";
import B_ThreeAndHalfStories2 from "../assets/photos/projects/B_ThreeAndHalfStories2.jpg";
import B_ThreeAndHalfStories3 from "../assets/photos/projects/B_ThreeAndHalfStories3.jpg";
import B_ThreeAndHalfStories4 from "../assets/photos/projects/B_ThreeAndHalfStories4.jpg";
import B_ThreeAndHalfStories5 from "../assets/photos/projects/B_ThreeAndHalfStories5.jpg";
import B_ThreeAndHalfStories6 from "../assets/photos/projects/B_ThreeAndHalfStories6.jpg";
import B_ThreeAndHalfStories7 from "../assets/photos/projects/B_ThreeAndHalfStories7.jpg";
import B_ThreeAndHalfStories8_jpg from "../assets/photos/projects/B_ThreeAndHalfStories8.jpg";
import B_ThreeAndHalfStories8_png from "../assets/photos/projects/B_ThreeAndHalfStories8.png";

// --- Appearance Profiler ---
import appearanceprofiler1 from "../assets/photos/projects/appearanceprofiler1.png";
import appearanceprofiler2 from "../assets/photos/projects/appearanceprofiler2.png";
import appearanceprofiler3 from "../assets/photos/projects/appearanceprofiler3.png";

// --- BIM 4D 5D ---
import BIM_4D_5D_1 from "../assets/photos/projects/BIM_4D_5D1.png";
import BIM_4D_5D_2 from "../assets/photos/projects/BIM_4D_5D2.png";

// --- Clash Detection Matrix Report ---
import ClashDetection1 from "../assets/photos/projects/ClashDetectionMatrixReport1.png";
import ClashDetection2 from "../assets/photos/projects/ClashDetectionMatrixReport2.png";
import ClashDetection3 from "../assets/photos/projects/ClashDetectionMatrixReport3.png";
import ClashDetection4 from "../assets/photos/projects/ClashDetectionMatrixReport4.png";
import ClashDetection5 from "../assets/photos/projects/ClashDetectionMatrixReport5.png";
import ClashDetection6 from "../assets/photos/projects/ClashDetectionMatrixReport6.png";
import ClashDetection7 from "../assets/photos/projects/ClashDetectionMatrixReport7.png";

// --- Luxury Medium-Scale Condominium Project ---
import LuxuryCondo1 from "../assets/photos/projects/LuxuryMedium-ScaleCondominiumProject1.jpg";
import LuxuryCondo2 from "../assets/photos/projects/LuxuryMedium-ScaleCondominiumProject2.jpg";
import LuxuryCondo3 from "../assets/photos/projects/LuxuryMedium-ScaleCondominiumProject3.jpg";
import LuxuryCondo4 from "../assets/photos/projects/LuxuryMedium-ScaleCondominiumProject4.jpg";
import LuxuryCondo5 from "../assets/photos/projects/LuxuryMedium-ScaleCondominiumProject5.jpg";
import LuxuryCondo6 from "../assets/photos/projects/LuxuryMedium-ScaleCondominiumProject6.jpg";
import LuxuryCondo7 from "../assets/photos/projects/LuxuryMedium-ScaleCondominiumProject7.jpg";
import LuxuryCondo8 from "../assets/photos/projects/LuxuryMedium-ScaleCondominiumProject8.jpg";

// --- Mixed Used Building ---
import MxiUsedBuilding1 from "../assets/photos/projects/MxiUsedBuilding1.png";
import MxiUsedBuilding2 from "../assets/photos/projects/MxiUsedBuilding2.png";
import MxiUsedBuilding3 from "../assets/photos/projects/MxiUsedBuilding3.png";
import MxiUsedBuilding4 from "../assets/photos/projects/MxiUsedBuilding4.png";
import MxiUsedBuilding5 from "../assets/photos/projects/MxiUsedBuilding5.png";
import MxiUsedBuilding6 from "../assets/photos/projects/MxiUsedBuilding6.jpg";
import MxiUsedBuilding7 from "../assets/photos/projects/MxiUsedBuilding7.jpg";
import MxiUsedBuilding8 from "../assets/photos/projects/MxiUsedBuilding8.jpg";

// --- QTO & BOQ ---
import QTO_BOQ1 from "../assets/photos/projects/QTO&BOQ1.png";
import QTO_BOQ2 from "../assets/photos/projects/QTO&BOQ2.png";
import QTO_BOQ3 from "../assets/photos/projects/QTO&BOQ3.png";
import QTO_BOQ4 from "../assets/photos/projects/QTO&BOQ4.png";
import QTO_BOQ5 from "../assets/photos/projects/QTO&BOQ5.png";
import QTO_BOQ6 from "../assets/photos/projects/QTO&BOQ6.png";

// --- SketchUp & Vray ---
import SketchUpVray1 from "../assets/photos/projects/SketchUp&Vray.png";
import SketchUpVray2 from "../assets/photos/projects/SketchUp&Vray2.png";
import SketchUpVray3 from "../assets/photos/projects/SketchUp&Vray3.png";
import SketchUpVray4 from "../assets/photos/projects/SketchUp&Vray4.png";
import SketchUpVray5 from "../assets/photos/projects/SketchUp&Vray5.png";
import SketchUpVray6 from "../assets/photos/projects/SketchUp&Vray6.png";
import SketchUpVray7 from "../assets/photos/projects/SketchUp&Vray7.png";

// --- Miscellaneous ---
import ToiletSOP from "../assets/photos/projects/ToiletSOP.png";

// Families Creation
import annotation_Families from "../assets/photos/projects/Families_Creation/Annotation_Families.png";
import Architectural_Families from "../assets/photos/projects/Families_Creation/Architectural_Families.png";
import Architectural_Families1 from "../assets/photos/projects/Families_Creation/Architectural_Families1.png";
import Profile_Families from "../assets/photos/projects/Families_Creation/Profile_Families.png";
import Structural_Families from "../assets/photos/projects/Families_Creation/Structural_Families.png";
import X_Base_Families from "../assets/photos/projects/Families_Creation/X_Base_Families.png";

import SS_ProjectSetup_Mar10_220008 from "../assets/photos/projects/Families_Creation/ProjectSettingUp/Screenshot 2026-03-10 220008.png";
import SS_ProjectSetup_Mar10_220033 from "../assets/photos/projects/Families_Creation/ProjectSettingUp/Screenshot 2026-03-10 220033.png";
import SS_ProjectSetup_Mar10_220746 from "../assets/photos/projects/Families_Creation/ProjectSettingUp/Screenshot 2026-03-10 220746.png";
import SS_ProjectSetup_Mar10_220838 from "../assets/photos/projects/Families_Creation/ProjectSettingUp/Screenshot 2026-03-10 220838.png";

import DesignOption from "../assets/photos/projects/Families_Creation/DesignOption.png";
import Phasing from "../assets/photos/projects/Families_Creation/Phasing.png";

import TwoAndHalf_ES from "../assets/photos/projects/2andHalf_ES.png";
import TwoAndHalf_ES1 from "../assets/photos/projects/2andHalf_ES1.png";
import ThreeAndHalf_ES from "../assets/photos/projects/3andHalf_ES.png";
import ThreeAndHalf_ES1 from "../assets/photos/projects/3andHalf_ES1.png";



export default function Projects() {
  // State to manage the open/closed state of the modal and which project is selected
  const [selectedProject, setSelectedProject] = useState(null);
  
  // State to track the currently visible image index within the modal
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // --- Updated Projects Data Structure ---
  const projectsData = [
    {
      id: 1,
      title: "QTO & BOQ using Navisworks Manage 2026 and Microsoft Excel",
      software: "Autodesk Navisworks Manage 2026",
      link: "https://drive.google.com/drive/folders/1_12OdMpa0JTKRxQKKERmH5hidWVtOijh?usp=drive_link",
      images: [QTO_BOQ1, QTO_BOQ6, QTO_BOQ5, QTO_BOQ4, QTO_BOQ3, QTO_BOQ2],
      description: [
        "Performed Quantity Takeoff (QTO) and generated a Bill of Quantities (BOQ) using Navisworks Manage 2026 with the rst_advanced_sample_project_R24.rvt model.",
        "Quantities were extracted and organized using tools such as Find Items, Quantification Workbook, Item & Resource Catalogs, Selection Tree, Sets, Properties, Sheet Browser, and Saved Viewpoints. Final data was exported to Microsoft Excel for analysis and reporting."
      ],
      skills: [
        { type: "image", src: revit },
        { type: "image", src: navisworks },
        { type: "image", src: excle },
      ],
    },
    {
      id: 2,
      title: "Clash Detection Matrix Report",
      software: "Navisworks Manage 2026 and Microsoft Excel",
      link: "https://drive.google.com/drive/folders/146E0kAx6rf1QlHLYGb2pdR7Sb3dl_qpn?usp=drive_link",
      images: [ClashDetection1, ClashDetection4, ClashDetection5, ClashDetection6, ClashDetection7, ClashDetection3, ClashDetection2],
      description: [
        "Developed a Clash Detection Matrix Report using Navisworks Manage 2026 and Microsoft Excel, based on the rst_advanced_sample_project_combined_R24.rvt model, to systematically identify and manage interferences between disciplines.",
        "Clash tests were organized by trade (Architectural, Structural, MEP) and structured into a matrix format for clear visualization of clash relationships."
      ],
      skills: [
        { type: "image", src: revit },
        { type: "image", src: navisworks },
        { type: "image", src: excle },
      ],
    },
    {
      id: 3,
      title: "BIM 4D 5D (Construction Sequence) animation Video",
      software: "Navisworks Manage 2026 and CapCut",
      link: "https://drive.google.com/drive/folders/1hI1Tk1bpuXVtj1zYmLQih0qGVqPlqBoo?usp=drive_link",
      images: [BIM_4D_5D_1, BIM_4D_5D_2],
      description: [
        "Created a BIM 4D/5D construction sequence animation using Navisworks Manage 2026 and Microsoft Excel. The project timeline was developed in Excel and integrated into Navisworks Timeliner to simulate construction sequencing.",
        "The animation was exported as a video and finalized using CapCut for editing and presentation."
      ],
      skills: [
        { type: "image", src: revit },
        { type: "image", src: navisworks },
        { type: "image", src: CapCut },
      ],
    },
    {
      id: 4,
      title: "Navisworks’s appearance profiler",
      software: "Navisworks Manage 2026",
      link: "https://drive.google.com/drive/folders/1FViYvPtZumUP7ohMP7sbMuR0zPg70mLD?usp=drive_link",
      images: [appearanceprofiler1, appearanceprofiler2, appearanceprofiler3],
      description: [
        "Utilized the Appearance Profiler in Navisworks Manage 2026 with the rst_advanced_sample_project_combined_R24.rvt model to visually categorize and differentiate model elements based on properties.",
        "Applied color schemes to enhance model clarity, improve element identification, and support efficient model review and coordination."
      ],
      skills: [
        { type: "image", src: revit },
        { type: "image", src: navisworks },
      ],
    },
    {
      id: 5,
      title: "Luxury Medium-Scale Condominium Project",
      software: "Autodesk Revit 2026",
      link: "https://drive.google.com/drive/folders/1Ra4A8IMn4cP6Mb4uX4FFZzimjwjwF2Gs?usp=drive_link",
      images: [LuxuryCondo1, LuxuryCondo2, LuxuryCondo3, LuxuryCondo4, LuxuryCondo5, LuxuryCondo6, LuxuryCondo7, LuxuryCondo8],
      description: [
        "Developed a comprehensive BIM model for a 16-storey luxury condominium with 6 units per floor, based on the original design concept. The project includes full architectural and structural modelling, along with complete drawing documentation such as floor plans, elevations, sections, area layouts, and detailed sheets.",
        "Key features include two basement levels for parking and services, a mixed-use ground floor (restaurant, reception, convenience store, office, yoga & gym), and fully planned residential units (2nd–14th floors) with complete functional spaces.",
        "Performed Quantity Take-Off (QTO) for structural and architectural elements (columns, beams, walls, floors) with proper data organization, filtering, and sheet-based presentation.",
        "Delivered a complete set of well-structured drawings with consistent naming conventions, supported by 3D views, camera perspectives, and rendered visuals for presentation."
      ],
      skills: [
        { type: "image", src: revit },
      ],
    },
    {
      id: 6,
      title: "Family Creation ( custom parameter )",
      software: "Autodesk Revit 2026",
      link: "https://drive.google.com/drive/folders/1Wq6HcNT3cv6aSzostGI-Cu0XwNpW9hwS?usp=drive_link",
      images: [
        Architectural_Families, Architectural_Families1,        
        annotation_Families,  Profile_Families, Structural_Families, X_Base_Families
              ],
      description: [
        "Created and customized multiple Revit Families, including Structural, Architectural, Annotation, Profile, Adaptive (X-Base), and Massing & Pattern-Based families.",
        "Gained practical experience in key BIM workflows such as Design Options, Worksharing, Project Setup, and Revit Phasing for construction sequencing, enhancing project coordination and model management efficiency."
      ],
      skills: [
        { type: "image", src: revit },
      ],
    },
    {
      id: 7,
      title: "ProjectSetup Workflow in Revit",
      software: "Autodesk Revit 2026",
      link: "https://drive.google.com/drive/folders/168imCKZ0IWanZxarQf5WUl328wc9tz2i?usp=drive_link",
      images: [
        SS_ProjectSetup_Mar10_220008, SS_ProjectSetup_Mar10_220033, SS_ProjectSetup_Mar10_220746, SS_ProjectSetup_Mar10_220838
              ],
      description: [
        "A clear and well-structured project setup is essential for coordination, accuracy, and smooth collaboration across disciplines.", "Please click the project file link for my project setup workflow in Revit."
      ],
      skills: [
        { type: "image", src: revit },
      ],
    },
    {
      id: 8,
      title: "Construction Sequence by Using Revit Phase",
      software: "Autodesk Revit 2026",
      link: "https://drive.google.com/drive/folders/1mzX8oRFZ6C3M-HMMnuwXwNFi9y1nJixQ?usp=drive_link",
      images: [
        Phasing
              ],
      description: [
        "Revit Phasing is used to represent different stages of a project such as existing conditions, demolition, renovation, and new construction within the same model. It helps teams clearly visualize how a building evolves over time while keeping all information coordinated in one file.","Phasing is especially useful for renovation, extension, and redevelopment projects where elements need to be tracked based on when they are created or demolished."
      ],
      skills: [
        { type: "image", src: revit },
      ],
    },
    {
      id: 9,
      title: "Design Option",
      software: "Autodesk Revit 2026",
      link: "https://drive.google.com/drive/folders/1WO1yxRoZkKva40P4hULjyQyJuKVY5Wde?usp=drive_link",
      images: [
        DesignOption
              ],
      description: [
        "In many projects, several design ideas need to be tested before selecting the final solution. Revit Design Options allows designers to create and manage multiple design variations within the same project model without affecting the main design.",
        "This feature is commonly used to compare different layouts, façade concepts, massing studies, or spatial arrangements during the design stage."
      ],
      skills: [
        { type: "image", src: revit },
      ],
    },
    {
      id: 10,
      title: "Toilet SOP Project",
      software: "Autodesk Revit 2026",
      link: "https://drive.google.com/drive/folders/1AR_zM7iDBo1E8nirpgcNbBnaJ7AEd9tT?usp=drive_link",
      images: [ToiletSOP],
      description: [
        "Architectural and structural modelling were developed based on the original design concept. The scope included the preparation of floor plans, elevations, sections, and area and room layout plans, along with wall setting-out plans, 3D views, and camera views.",
        "Comprehensive documentation was produced, including schedules, tags, annotations, legends, keynotes, and detailed drawing sheets.",
        "The project was delivered through well-organized and clearly structured drawing sheets to support effective presentation and communication."
      ],
      skills: [
        { type: "image", src: revit },
      ],
    },
    {
      id: 11,
      title: "Mix Used Building Project",
      software: "Autodesk Revit 2022",
      link: "https://drive.google.com/file/d/1o7RpFkng9TF6hMccrxWkqotX5oS8EIP0/view?usp=drive_link",
      images: [MxiUsedBuilding5, MxiUsedBuilding2, MxiUsedBuilding3, MxiUsedBuilding4, MxiUsedBuilding1, MxiUsedBuilding6, MxiUsedBuilding7, MxiUsedBuilding8],
      description: [
        "Architectural and structural modelling were developed based on the original design concept. The project included the preparation of floor plans, elevations, sections, and area and room layout plans, along with wall setting-out plans, 3D views, and camera views.",
        "The development consists of a 16-storey building with 6 units per floor, supported by two basement levels for parking and PUB services. The ground floor accommodates mixed-use functions, including a restaurant, condominium reception, 24-hour convenience store, office spaces, and wellness facilities such as a yoga and gym area.",
        "Quantity take-offs were generated for key structural and architectural elements, including columns, beams, walls, and floors. Data was systematically organized with proper formatting, filtering, grouping, and sheet-based presentation.",
        "The project was supported with 3D views, camera views, and rendered images to effectively communicate design intent."
      ],
      skills: [
        { type: "image", src: revit },
      ],
    },
    {
      id: 12,
      title: "Three and Half Stories Residential Building",
      software: "Autodesk Revit 2026",
      link: "https://drive.google.com/file/d/1imLwgZ3u1VSn2gODJMcd3XawOZOOEecJ/view?usp=drive_link",
      images: [A_ThreeAndHalfStories5, A_ThreeAndHalfStories4, A_ThreeAndHalfStories1, A_ThreeAndHalfStories3, A_ThreeAndHalfStories2,  ],
      description: [
        "Architectural and structural modelling were developed based on the original design concept. The scope included the preparation of floor plans, elevations, sections, and area and room layout plans, along with wall setting-out plans, 3D views, and camera views.",
        "The project consists of a 3.5-storey building, with documentation to support design development and visualization.",
        "The project was presented through clear 3D views and camera views to effectively communicate the design intent."
      ],
      skills: [
        { type: "image", src: revit },
      ],
    },
    {
      id: 13,
      title: "Three and Half Stories Residential Building ",
      software: "Autodesk Revit 2022",
      link: "https://drive.google.com/file/d/1xOAUnSJPYtUp-Fn2BYWn9r-vQLJKEti7/view?usp=drive_link",
      images: [
        B_ThreeAndHalfStories1, B_ThreeAndHalfStories2,
        B_ThreeAndHalfStories3, B_ThreeAndHalfStories4, B_ThreeAndHalfStories5, B_ThreeAndHalfStories6,
        B_ThreeAndHalfStories7,
        B_ThreeAndHalfStories8_jpg,
        B_ThreeAndHalfStories8_png
      ],
      description: [
        "Architectural and structural modelling were developed based on the original design concept. The scope included the preparation of floor plans, elevations, sections, and area and room layout plans, along with wall setting-out plans, 3D views, and camera views.",
        "The project consists of a 3.5-storey building, with documentation to support design development and visualization.",
        "The project was presented through clear 3D views and camera views to effectively communicate the design intent."
      ],
      skills: [
        { type: "image", src: revit },
      ],
    },
    {
      id: 14,
      title: "One Stories Residential Building",
      software: "Autodesk Revit 2026",
      link: "https://drive.google.com/file/d/1WjjpXKH6nCw4WUZLFwrKaBzUi6A1o3bt/view?usp=drive_link",
      images: [A_OneStoryResidentialBuilding, A_OneStoryResidentialBuilding2],
      description: [
        "Architectural and structural modelling were developed based on the original design concept. The scope included the preparation of floor plans, elevations, sections, and area and room layout plans, along with wall setting-out plans, 3D views, and camera views.",
        "The project consists of a one-storey building, with documentation to support design development and visualization.",
        "The project was presented through clear 3D views and camera views to effectively communicate the design intent."
      ],
      skills: [
        { type: "image", src: revit },
      ],
    },
    {
      id: 15,
      title: "One Stories Residential Building",
      software: "Autodesk Revit 2022",
      link: "https://drive.google.com/file/d/1oytDk1KzcV3pchqQ656JULajhLZWMa12/view?usp=drive_link",
      images: [B_OneStoryResidentialBuilding, B_OneStoryResidentialBuilding2, B_OneStoryResidentialBuilding3, B_OneStoryResidentialBuilding4],
      description: [
       "Architectural and structural modelling were developed based on the original design concept. The scope included the preparation of floor plans, elevations, sections, and area and room layout plans, along with wall setting-out plans, 3D views, and camera views.",
        "The project consists of a one-storey building, with documentation to support design development and visualization.",
        "The project was presented through clear 3D views and camera views to effectively communicate the design intent."
      ],
      skills: [
        { type: "image", src: revit },

      ],
    },
    {
      id: 16,
      title: "Three and Half Stories Residential Building (Structural Analysis and Design)",
      software: "Etabs & SAFE",
      link: "https://drive.google.com/drive/folders/1qllbPpvrp5TjlfEyKolcXB8aujsWmJQW?usp=drive_link",
      images: [
        ThreeAndHalf_ES, ThreeAndHalf_ES1
      ],
      description: [
        "Performed structural analysis and developed structural drawings for a three-and-a-half storey residential building based on architectural drawings, using ETABS and SAFE.",
        "The workflow included modelling, load application, analysis, and design of structural elements such as beams, columns, slabs, and foundations, ensuring accuracy and compliance with design requirements."
      ],
      skills: [
        { type: "image", src: autocad },
        { type: "image", src: Etabs },
        { type: "image", src: SAFE },
      ],
    },
    {
      id: 17,
      title: "Two and Half Stories Residential Building (Structural Analysis and Design)",
      software: "Etabs & SAFE",
      link: "https://drive.google.com/drive/folders/1G6VkFr-DEichyAFmSxU39z0BpMJGLOIz?usp=drive_link",
      images: [
        TwoAndHalf_ES, TwoAndHalf_ES1
      ],
      description: [
        "Performed structural analysis and developed structural drawings for a three-and-a-half storey residential building based on architectural drawings, using ETABS and SAFE.",
        "The workflow included modelling, load application, analysis, and design of structural elements such as beams, columns, slabs, and foundations, ensuring accuracy and compliance with design requirements."
      ],
      skills: [
        { type: "image", src: autocad },
        { type: "image", src: Etabs },
        { type: "image", src: SAFE },
      ],
    },
    {
      id: 18,
      title: "Additional Freelance Design Project",
      software: "Sketch Up, Vray & Photoshop",
      link: "",
      images: [SketchUpVray1, SketchUpVray2, SketchUpVray3, SketchUpVray4, SketchUpVray5, SketchUpVray6, SketchUpVray7],
      description: [
        "Contributed as a volunteer architectural designer, producing SketchUp models for monastery projects across Myanmar, supporting conceptual design development and visualization for multiple sites."
      ],
      skills: [
        { type: "image", src: Sketchup },
        { type: "text", src: Vray },
        { type: "text", src: PhotoShop },
      ],
    },
  ];

  // --- Functions ---
  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const showPrevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
    );
  };

  const getFirstImage = (project) => {
    return (project.images && project.images.length > 0) ? project.images[0] : Cat_Cream;
  };

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

// Minimum distance (in pixels) to be considered a swipe
  const minSwipeDistance = 50;
      const onTouchStart = (e) => {
      setTouchEnd(null); // Reset for new swipe
      setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
      setTouchEnd(e.targetTouches[0].clientX);
    };

      const [isExpanded, setIsExpanded] = useState(false);

      const SeeMore = () => {
        setIsExpanded(!isExpanded);
      };
      
  return (
    <div id="project" className="mx-10 my-5 font-serif text-white scroll-mt-24">
      <div  className=" my-5 font-serif text-white border-b border-gray-700 pb-2 text-justify">
          <h1 className="text-xl ">MY PORTFOLIO .....</h1>
          <div className={` ${isExpanded ? "" : "line-clamp-3"}`}>
          <p>
            This portfolio presents a selection of my personal and professional projects developed using Building Information Modelling (BIM) tools, with a primary focus on Autodesk Revit and Autodesk Navisworks Manage. In addition, supporting software such as Autodesk AutoCAD, Microsoft Excel and CapCut has been utilized for reporting, data analysis, video editing, and presentation purposes.
          </p>
          <p>
            The latter section of this portfolio also showcases selected freelance projects created using SketchUp and V-Ray, demonstrating my versatility in architectural visualization and design support.
          </p>
          </div>
      <p 
        className=" text-gray-400 cursor-pointer hover:underline"
        onClick={SeeMore}
      >
        {isExpanded ? "See less" : "See more"} .....
      </p>
      </div>
      <div  className=" my-5 space-y-2 font-serif text-white relative">          
          <h1 className="text-xl underline">PROJECTS .....</h1>
        {/* --- Projects List --- */}
            {projectsData.map((project) => (
            <div
                key={project.id}
                className="mb-6 lg:grid lg:grid-cols-4 gap-4 p-4 border-b-2 border-white"
              >
                <div className="flex flex-col mx-auto items-center justify-center cursor-pointer" onClick={() => openModal(project)}>
                  <img
                    src={getFirstImage(project)}
                    className="w-50 sm:70 md:100 lg:120 mx-auto rounded shadow-lg hover:w-54"
                    alt={project.title}
                  />
                  <h3 className="text-lg text-white text-center hidden lg:block mt-2 hover:text-blue-400">
                    {project.title}
                  </h3>
                </div>

                <div className="col-span-3 p-2 space-y-2 lg:border-l-2 border-white">
                  <h3 
                    className="text-xl font-bold hover:text-blue-500 hover:underline cursor-pointer"
                    onClick={() => openModal(project)}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm">{project.software}</p>

                  <div className="text-justify text-sm opacity-80">
                      <div className="text-justify text-sm opacity-80 whitespace-pre-line">
                      <ReadMoreText 
                          text={Array.isArray(project.description) ? project.description.join("\n\n") : project.description} 
                          wordLimit={25} 
                      />
                      </div>
                      </div>

                  <div className="flex gap-2 mt-2 items-center">
                    <p>Skills:</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {Array.isArray(project.skills) &&
                        project.skills.map((skill, index) => (
                          <img
                            key={index}
                            src={skill.src}
                            alt="skill icon"
                            className="w-8 h-8 object-contain"
                          />
                        ))}
                    </div>
                  </div>
                </div>
            </div>
          ))}

      {/* --- POPUP MODAL --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-blue bg-opacity-80 backdrop-blur-sm" onClick={closeModal}>
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900 border border-gray-700 rounded-xl shadow-2xl p-6 text-white" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-3xl font-bold text-gray-400 hover:text-white transition-colors"
            >
              &times;
            </button>

            <div className="grid md:grid-cols-1 gap-6">
              <div className="relative group">
                <h2 className="text-3xl font-bold text-blue-400 mb-4">{selectedProject.title}</h2>
                
                <div 
                    className="relative aspect-video rounded-lg overflow-hidden border border-gray-700 bg-black flex items-center justify-center touch-none"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                  >
                  <img 
                    src={selectedProject.images[currentImageIndex]} 
                    alt={`${selectedProject.title} view ${currentImageIndex + 1}`} 
                    className="max-w-7/8 max-h-full object-contain"
                  />

                {/* Existing Previous/Next Buttons (Hidden on small screens by default in your CSS) */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button 
                        onClick={showPrevImage}
                        className="hidden md:block absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 hover:bg-white/40 transition-opacity"
                      >
                        &lsaquo;
                      </button>
                      <button 
                        onClick={showNextImage}
                        className="hidden md:block absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 hover:bg-white/40 transition-opacity"
                      >
                        &rsaquo;
                      </button>
                    </>
                  )}
                </div>

                {selectedProject.images.length > 1 && (
                  <div className="flex justify-center gap-2 mt-3">
                    {selectedProject.images.map((img, index) => (
                      <button 
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-12 h-10 rounded overflow-hidden border-2 transition-all ${
                          index === currentImageIndex 
                            ? 'border-blue-500 scale-110 shadow-lg' 
                            : 'border-gray-600 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={img} className="w-full h-full object-cover" alt={`thumbnail ${index + 1}`} />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-6 pt-4 border-t border-gray-700">
                    <div className="grid md:grid-cols-3 gap-4"> {/* Changed to 3 columns */}
                        {/* Software Column */}
                        <div>
                        <h4 className="text-xl font-semibold text-gray-200 mb-2 border-b-2 border-gray-700 pb-1">Software</h4>
                        <p className="text-gray-300 bg-gray-800 p-2 rounded text-sm">{selectedProject.software}</p>
                        </div>

                        {/* Skills Column */}
                        <div>
                        <h4 className="text-xl font-semibold text-gray-200 mb-2 border-b-2 border-gray-700 pb-1">Skills</h4>
                        <div className="flex flex-wrap gap-2 pt-1">
                            {selectedProject.skills.map((skill, index) => (
                            <img key={index} src={skill.src} alt="skill" className="w-10 h-10 object-contain bg-white/10 p-1 rounded" />
                            ))}
                        </div>
                        </div>

                        {/* NEW: Link Column */}
                        <div>
                        <h4 className="text-xl font-semibold text-gray-200 mb-2 border-b-2 border-gray-700 pb-1">Project Files</h4>
                        {selectedProject.link ? (
                            <a 
                            href={selectedProject.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors text-sm"
                            >
                            View on Google Drive
                            </a>
                        ) : (
                            <p className="text-gray-500 italic text-sm p-2">No files linked</p>
                        )}
                        </div>
                    </div>

                    {/* Updated Description for Paragraphs */}
                    <div>
                        <h4 className="text-xl font-semibold text-gray-200 mb-2 border-b-2 border-gray-700 pb-1">Description</h4>
                        <div className="text-gray-300 leading-relaxed text-justify text-sm">
                        {Array.isArray(selectedProject.description) ? (
                            selectedProject.description.map((para, i) => (
                            <p key={i} className="mb-4">{para}</p> // mb-4 creates the paragraph spacing
                            ))
                        ) : (
                            <p>{selectedProject.description}</p>
                        )}
                        </div>
                    </div>
                    </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}