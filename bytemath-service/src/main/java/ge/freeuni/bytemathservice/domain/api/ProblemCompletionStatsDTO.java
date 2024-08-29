package ge.freeuni.bytemathservice.domain.api;

import lombok.Data;

@Data
public class ProblemCompletionStatsDTO {

    private int easyCompleted;
    private int mediumCompleted;
    private int hardCompleted;
}
