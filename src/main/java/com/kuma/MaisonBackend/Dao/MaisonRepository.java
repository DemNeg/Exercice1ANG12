package com.kuma.MaisonBackend.Dao;

import com.kuma.MaisonBackend.entities.Maison;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@RepositoryRestResource
@CrossOrigin("*")
public interface MaisonRepository extends JpaRepository<Maison,Long> {
   @RestResource(path = "/byOwner")
    public List<Maison> findByOwnerContains(@Param("mc") String keyword);
    @RestResource(path = "/byOwnerPage")
    public Page<Maison> findByOwnerContains(@Param("mc") String keyword, Pageable pageable);

}
