package ge.freeuni.bytemathservice.mapper;

import ge.freeuni.bytemathservice.domain.api.LockedLinesDTO;
import ge.freeuni.bytemathservice.domain.api.ProblemDTO;
import ge.freeuni.bytemathservice.domain.api.TestCaseDTO;
import ge.freeuni.bytemathservice.domain.entity.Problem;
import ge.freeuni.bytemathservice.domain.entity.TestCase;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProblemMapper {

    public ProblemDTO toDTO(Problem entity, String language) {
        if (entity == null) {
            return null;
        }

        return ProblemDTO.builder()
                .id(entity.getId().toString())
                .title(getFieldBasedOnLanguage(language, entity.getTitleGeo(), entity.getTitleEng()))
                .description(getFieldBasedOnLanguage(language, entity.getDescriptionGeo(), entity.getDescriptionEng()))
                .task(getFieldBasedOnLanguage(language, entity.getTaskGeo(), entity.getTaskEng()))
                .inputFormat(getFieldBasedOnLanguage(language, entity.getInputFormatGeo(), entity.getInputFormatEng()))
                .outputFormat(getFieldBasedOnLanguage(language, entity.getOutputFormatGeo(), entity.getOutputFormatEng()))
                .example(getFieldBasedOnLanguage(language, entity.getExampleGeo(), entity.getExampleEng()))
                .note(getFieldBasedOnLanguage(language, entity.getNoteGeo(), entity.getNoteEng()))
                .pythonTemplate(getFieldBasedOnLanguage(language, entity.getPythonTemplateGeo(), entity.getPythonTemplateEng()))
                .javaTemplate(getFieldBasedOnLanguage(language, entity.getJavaTemplateGeo(), entity.getJavaTemplateEng()))
                .testCases(testCasesToDTOs(entity.getTestCases()))
                .lockedLines(lockedLinesToDTO(entity.getLockedLines()))
                .difficulty(entity.getDifficulty())
                .build();
    }

    private String getFieldBasedOnLanguage(String language, String geoField, String engField) {
        return language.equalsIgnoreCase("geo") ? geoField : engField;
    }


    public TestCaseDTO testCaseToDTO(TestCase entity) {
        if (entity == null) {
            return null;
        }
        return TestCaseDTO.builder()
                .input(entity.getInput())
                .expectedOutput(entity.getExpectedOutput())
                .build();
    }

    private List<TestCaseDTO> testCasesToDTOs(List<TestCase> testCases) {
        return testCases.stream()
                .map(this::testCaseToDTO)
                .collect(Collectors.toList());
    }


    private LockedLinesDTO lockedLinesToDTO(Problem.LockedLines lockedLines) {
        if (lockedLines == null) {
            return null;
        }
        return new LockedLinesDTO(lockedLines.getPython(), lockedLines.getJava());
    }
}
