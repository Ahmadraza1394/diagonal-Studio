import { useTranslation } from "react-i18next";
import {
  projectTranslations,
  projectDetailLabels,
  projectStatusTranslations,
  projectTypologyTranslations,
} from "../data/projectsTranslations";

/**
 * Custom hook for project translations
 *
 * This hook provides translated project data while preserving the original Spanish data.
 * It automatically detects the current language and returns the appropriate translation.
 *
 * @returns {Object} Translation utilities
 */
export const useProjectTranslation = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  /**
   * Get translated project data
   * @param {Object} project - Original project object from projects.js
   * @returns {Object} Project with translated fields
   */
  const getTranslatedProject = (project) => {
    if (!project) return null;

    // For Spanish, return original data
    if (currentLanguage === "es") {
      return {
        ...project,
        // Ensure we're using original Spanish data
        title: project.title,
        typology: project.typology,
        location: project.location,
        description: project.description,
        concept: project.concept,
        reference: project.reference,
      };
    }

    // For English, get translations
    const translation = projectTranslations.en[project.id];

    if (!translation) {
      // Fallback to original if no translation available
      return project;
    }

    return {
      ...project,
      // Keep original title (proper names usually don't translate)
      title: project.title,
      // Translate typology
      typology: translation.typology || project.typology,
      // Keep original location (place names usually don't translate)
      location: project.location,
      // Translate description
      description: translation.description || project.description,
      // Translate concept
      concept: translation.concept || project.concept,
      // Translate reference if exists
      reference: translation.reference
        ? {
            ...project.reference,
            title: translation.reference.title || project.reference?.title,
          }
        : project.reference,
    };
  };

  /**
   * Get translated detail label
   * @param {string} label - Original label (e.g., "Client", "Location")
   * @returns {string} Translated label
   */
  const getDetailLabel = (label) => {
    const labels =
      currentLanguage === "es"
        ? projectDetailLabels.es
        : projectDetailLabels.en;
    return labels[label] || label;
  };

  /**
   * Get translated status value
   * @param {string} status - Original status value
   * @returns {string} Translated status
   */
  const getStatusTranslation = (status) => {
    const translations =
      currentLanguage === "es"
        ? projectStatusTranslations.es
        : projectStatusTranslations.en;
    return translations[status] || status;
  };

  /**
   * Get translated typology
   * @param {string} typology - Original typology value
   * @returns {string} Translated typology
   */
  const getTypologyTranslation = (typology) => {
    if (currentLanguage === "es") return typology;
    const translations = projectTypologyTranslations.en;
    return translations[typology] || typology;
  };

  /**
   * Get translated project details array
   * @param {Array} details - Original details array from project
   * @returns {Array} Details with translated labels and values
   */
  const getTranslatedDetails = (details) => {
    if (!details || !Array.isArray(details)) return [];

    return details.map((detail) => ({
      label: getDetailLabel(detail.label),
      value:
        detail.label === "Status"
          ? getStatusTranslation(detail.value)
          : detail.value,
    }));
  };

  return {
    getTranslatedProject,
    getDetailLabel,
    getStatusTranslation,
    getTypologyTranslation,
    getTranslatedDetails,
    currentLanguage,
  };
};
