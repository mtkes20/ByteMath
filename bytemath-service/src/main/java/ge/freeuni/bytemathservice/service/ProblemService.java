package ge.freeuni.bytemathservice.service;

import ge.freeuni.bytemathservice.domain.api.ProblemDTO;
import ge.freeuni.bytemathservice.domain.api.ProblemSummaryDTO;
import ge.freeuni.bytemathservice.domain.entity.BytemathUser;

import java.util.List;

public interface ProblemService {
    List<ProblemSummaryDTO> getProblemsByCourse(String identifier, String language);

    ProblemDTO getProblemById(BytemathUser currentUser, Long id, String language);
}
