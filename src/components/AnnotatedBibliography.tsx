import { Text } from "./Text";
import { BibliographyEntry } from "./BibliographyEntry";

export const AnnotatedBibliography = () => {
  return (
    <div className="flex flex-col gap-[24px]">
      <div data-section="bibliography">
        <Text className="text-[16px] font-[400] text-[#171717]">
          Annotated Bibliography
        </Text>
      </div>
      <div className="flex flex-col gap-[32px]">
        <BibliographyEntry
          citation="Garro-Núñez, D., Picado-Martínez, M. J., Espinoza-Campos, E., Ugalde-Araya, D., Macaya, G., Raventós, H., & Chavarría-Soley, G. (2024). Systematic exploration of a decade of publications on psychiatric genetics in Latin America. American journal of medical genetics. Part B, Neuropsychiatric genetics : the official publication of the International Society of Psychiatric Genetics, 195(3), e32960. https://doi.org/10.1002/ajmg.b.32960"
          annotation="This meta-analysis reviews a decade of psychiatric genetics research in Latin America, going into the incentives of the organizations that collect this data, and the need for greater regional collaboration and investment. This source is critical the investigation since it articulates the current issues in psychiatric genetics research in Latin America, and how this research differs from similar endeavors in first-world countries. Note that the Latin American Genomics Consortium began by advancing psychiatric genomics."
        />
        <BibliographyEntry
          citation="Fonseca, L., Sena, B. F., Crossley, N., Lopez-Jaramillo, C., Koenen, K., Freimer, N. B., Bressan, R. A., Belangero, S. I., Santoro, M. L., & Gadelha, A. (2021). Diversity matters: opportunities in the study of the genetics of psychotic disorders in low- and middle-income countries in Latin America. Revista brasileira de psiquiatria (Sao Paulo, Brazil : 1999), 43(6), 631-637. https://doi.org/10.1590/1516-4446-2020-1240"
          annotation="This source, titled “Diversity matters”, elucidates the necessity and importance of a diverse genetic and environmental dataset in research findings on psychotic disorders. This is the very issue that the Latin American Genomics Consortium was established to solve. Hence, understanding the root cause issues within psychotic genomics is critical for this investigation."
        />
        <BibliographyEntry
          citation="Giusti-Rodríguez, P., Okewole, N., Jain, S., Montalvo-Ortiz, J. L., & Peterson, R. E. (2025). Diversifying Psychiatric Genomics: Globally Inclusive Strategies Toward Health Equity. The Psychiatric clinics of North America, 48(2), 241-256. https://doi.org/10.1016/j.psc.2025.01.003"
          annotation="This study underlies how a lack of diverse psychiatric genomic data affects the potential of precision medicine in clinical settings. Unlike other studies in this investigation, it takes a non-Lat-am approach and instead focuses on the lack of diversity at a global scale. It also touches on the environmental factors at play and how these also result in a necessity for more diverse data. This is critical since it lets us extrapolate certain patterns we may find present in Latin American studies."
        />
        <BibliographyEntry
          citation="Brown, J. E. H., Young, J. L., & Martinez-Martin, N. (2022). Psychiatric genomics, mental health equity, and intersectionality: A framework for research and practice. Frontiers in psychiatry, 13, 1061705. https://doi.org/10.3389/fpsyt.2022.1061705"
          annotation="The crux of this study lies in the constant reassertion that mental health cannot be boiled down to genetics alone. In fact, societal factors and closely held cultural beliefs profoundly impact how mental illness manifests in different parts of the globe. Instead, this study pushes for an intersectional framework that models mental illness across several factors. This is critical since diverse populations contain diverse genomics and diverse cultures and systemic injustices. "
        />
        <BibliographyEntry
          citation="Lopes-Cendes, I., & de Oliveira, T. C. (2025). Inequalities and Inclusion in Genomics Applied to Healthcare: A Latin American Perspective. Annual review of genomics and human genetics, 10.1146/annurev-genom-111224-100329. Advance online publication. https://doi.org/10.1146/annurev-genom-111224-100329"
          annotation="This study discusses the distinct challenges in deploying precision medicine in Latin American countries due to the predominance of admixed populations. It proposes ad hock regulatory frameworks necessary for maintaining ethical, legal, and privacy concerns regarding genomic data. This is necessary for the study since it describes the unique challenges posed by conducting this research in Latin America."
        />
        <BibliographyEntry
          citation="Canino, G., & Alegría, M. (2008). Psychiatric diagnosis - is it universal or relative to culture?. Journal of child psychology and psychiatry, and allied disciplines, 49(3), 237-250. https://doi.org/10.1111/j.1469-7610.2007.01854.x"
          annotation="The objective this study proposes strikes at the efficacy and importance of organizations such as the Latin American Genomics Consortium. The study analyzes the extent to which psychiatric diagnosis is universal, indiscriminate of the population in which it occurs, or tied to culture, varying from region to region. If it truly is universal, there is little, if any relevance in collecting a diverse dataset, since it simply isn't necessary. What applies to one applies to all. Hence, understanding the extent to which psychiatric diagnosis is relative to culture helps us understand how necessary a diverse pool of psychiatric genomics data is."
        />
        <BibliographyEntry
          citation="Alarcón R. D. (2003). Mental health and mental health care in Latin America. World psychiatry : official journal of the World Psychiatric Association (WPA), 2(1), 54-56."
          annotation="This study reviews the vast disparities in wealth and health budgets in Latin America and its subsequent effect on the resources allocated to psychiatric care in these regions. It touts that less than 2% of health spending is allocated to psychiatric facilities, on average. Moreover, it emphasizes how crucial cultural stigma and minimal government support leaves most people without adequate care. This is important to understand for this assignment since it helps us gauge the current psychiatric landscape, either it be cultural or fiscal, in Latin America."
        />
        <BibliographyEntry
          citation="Barba, M. A. D. E. L. P., Castillo, J. P. G. D. E. L., & Massarani, L. (2019). Public engagement in science: Mapping out and understanding the practice of science communication in Latin America. Anais Da Academia Brasileira de Ciências, 91."
          annotation="In critical component of both the course and the game is the notion of involving the community in which you conduct research in your research. This study underlies the necessity and current practice of science communication in Latin America. This will help this investigation better understand the current standards, and how they can be improved upon. The study analyzes 123 institutions from 14 LatAm countries to understand communication activities, focusing on types of activities, audiences, and organizational conditions. The findings reveal trends and challenges that can inform strategies to strengthen science communication in the region."
        />
        <BibliographyEntry
          citation="Fu, J. M., Satterstrom, F. K., Peng, M., Brand, H., Collins, R. L., Dong, S., Wamsley, B., Klei, L., Wang, L., Hao, S. P., Stevens, C. R., Cusick, C., Babadi, M., Banks, E., Collins, B., Dodge, S., Gabriel, S. B., Gauthier, L., Lee, S. K., … Talkowski, M. E. (2022, August 18). Rare coding variation provides insight into the genetic architecture and phenotypic context of autism. Nature News. https://www.nature.com/articles/s41588-022-01104-0"
          annotation="One of the primary authors, Dr. Maria Rita Passos Bueno from the University of São Paulo, appears in the game if you select São Paulo as your location. She is an expert in autism research, focusing on how autism manifests in Latin American populations. Her work demonstrates the need for region-specific psychiatric genomic data to better understand and address mental health conditions in diverse communities. Note that he also works with the Latin American Genomics Consortium."
        />
        <BibliographyEntry
          citation="O'Connell, K. S., Adolfsson, R., Andlauer, T. F. M., Bauer, M., Baune, B., Biernacka, J. M., Carpiniello, B., Cichon, S., Craddock, N., Cuellar-Barboza, A. B., Dannlowski, U., Degenhardt, F., Dikeos, D., Ferentinos, P., Forstner, A. J., Frye, M. A., Fullerton, J. M., Grigoroiu-Serbanescu, M., Guzman-Parra, J., Jones, L., ... Andreassen, O. A. (2025). New genomics discoveries across the bipolar disorder spectrum implicate neurobiological and developmental pathways. Biological Psychiatry. Advance online publication. https://doi.org/10.1016/j.biopsych.2025.05.020"
          annotation="One of the primary authors of this paper, N., Cuellar-Barboza, is mentioned by name in the gameplay if one selects Nuevo León as their selected location. He is a professor at the Universidad Autónoma de Nuevo León, and conducts extensive research on the genomics of bipolar disorder, and their specific manifestations in Latin America. His research allows us to understand how mental illness can vary from region to region and serves as an example of the importance of diverse psychiatric genomic data. Note that he also works with the Latin American Genomics Consortium."
        />
        <BibliographyEntry
          citation="Bruxel, E. M., Rovaris, D. L., Belangero, S. I., Chavarría-Soley, G., Cuellar-Barboza, A. B., Martínez-Magaña, J. J., Nagamatsu, S. T., Nievergelt, C. M., Núñez-Ríos, D. L., Ota, V. K., Peterson, R. E., Sloofman, L. G., Adams, A. M., Albino, E., Alvarado, A. T., Andrade-Brito, D., Arguello-Pascualli, P. Y., Bandeira, C. E., Bau, C. H. D., Bulik, C. M., … Montalvo-Ortiz, J. L. (2025). Psychiatric genetics in the diverse landscape of Latin American populations. Nature genetics, 57(5), 1074-1088. https://doi.org/10.1038/s41588-025-02127-z"
          annotation="This research focuses on the lack of psychiatric genomic studies in Latin America and the Caribbean, despite their genetic diversity. Most existing data comes from European populations, limiting its relevance locally. Addressing this gap is vital for fair and effective mental health care. This is pertinent to the project because it supports the need for region-specific research and funding."
        />
        <BibliographyEntry
          citation="Sequeiros, J., Gibbon, S., & Clarke, A. (2015). Genetics and ethics in Latin America. Journal of community genetics, 6(3), 185-187. https://doi.org/10.1007/s12687-015-0241-5"
          annotation="This research explores how genetics in Latin America is shaped by a legacy of colonialism, racism, and social inequality. While the region has made important scientific advances, ethical challenges like informed consent and unequal access to genetic services remain. These issues are directly relevant to the project, as they highlight the need for justice frameworks and community engagement in regional psychiatric genomics. Addressing these challenges ensures that new research benefits all communities fairly and ethically."
        />
      </div>
    </div>
  );
};
