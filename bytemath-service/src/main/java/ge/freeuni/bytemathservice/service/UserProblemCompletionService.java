package ge.freeuni.bytemathservice.service;

import ge.freeuni.bytemathservice.domain.api.ProblemCompletionStatsDTO;
import ge.freeuni.bytemathservice.domain.entity.BytemathUser;
import org.springframework.transaction.annotation.Transactional;

public interface UserProblemCompletionService {
    @Transactional
    void markProblemAsCompleted(BytemathUser user, Long problemId);

    ProblemCompletionStatsDTO getProblemCompletionStats(BytemathUser user);

    boolean isProblemCompleted(BytemathUser user, Long problemId);
}
