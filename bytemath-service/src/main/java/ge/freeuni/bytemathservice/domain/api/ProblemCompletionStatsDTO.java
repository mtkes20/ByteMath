package ge.freeuni.bytemathservice.domain.api;

import lombok.Data;

@Data
public class ProblemCompletionStatsDTO {

    private int easyCompleted;
    private int easyTotal;
    private int mediumCompleted;
    private int mediumTotal;
    private int hardCompleted;
    private int hardTotal;
    private int completed;
    private int total;
}
