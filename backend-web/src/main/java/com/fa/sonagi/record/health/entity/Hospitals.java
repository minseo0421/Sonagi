package com.fa.sonagi.record.health.entity;

import com.fa.sonagi.baby.entity.Baby;
import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;
import lombok.*;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "hospital")
public class Hospitals {

  @Id
  @GeneratedValue
  @Column(name = "hospital_id")
  private Long id;

  @ManyToOne(fetch = FetchType.LAZY)
  @Column(name = "baby_id")
  private Baby baby;

  @Column(name = "user_id")
  private Long userId;

  @Column(name = "created_date")
  private LocalDate createdDate;

  @Column(name = "created_time")
  private LocalTime createdTime;

  @Column(name = "memo")
  private String memo;

  public void updateHospitals(LocalTime createdTime, String memo) {
    this.createdTime = createdTime;
    this.memo = memo;
  }
}