package ge.freeuni.bytemathservice.domain.api;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LockedLinesDTO {
    private int python;
    private int java;
}
