package com.hbo.movies.entities;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;
import java.util.Set;

/**
 * @author Houssem BOUALI
 * date: 23/12/2021
 */
@Data
@Entity
public class User {

    @Id
    @GeneratedValue
    private Long id;
    private String firstName;
    private String lastName;
    private LocalDate birthday;
    private String username;
    private String password;

    @ManyToMany
    @JoinTable(
            name = "user_role",
            joinColumns = {@JoinColumn(name = "user_id", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "role_id", referencedColumnName = "id")}
    )
    private Set<Role> roles;

    @OneToMany(mappedBy = "user")
    private List<UserMovie> userMovies;

    @OneToMany(mappedBy = "user")
    private List<MovieList> movieList;
}
