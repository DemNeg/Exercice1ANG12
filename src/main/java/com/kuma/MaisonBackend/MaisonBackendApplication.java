package com.kuma.MaisonBackend;

import com.kuma.MaisonBackend.Dao.MaisonRepository;
import com.kuma.MaisonBackend.entities.Maison;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

@SpringBootApplication
public class MaisonBackendApplication implements CommandLineRunner {
	@Autowired
	MaisonRepository maisonRepository;
	@Autowired
	RepositoryRestConfiguration restConfiguration;
	public static void main(String[] args) {
		SpringApplication.run(MaisonBackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		restConfiguration.exposeIdsFor(Maison.class);
		maisonRepository.save(new Maison(null,1000,200000,"SINGOU"));
		maisonRepository.save(new Maison(null,5000,50000,"DRISSA"));
		maisonRepository.save(new Maison(null,3000,10000,"MOUSSA"));
	}
}
