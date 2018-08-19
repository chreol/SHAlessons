#show databases;
#use world;
#show tables;
#select * from country;
#select * from city;
#select * from countrylanguage;
#select * from city where countrycode = 'COD';
#select * from city where countrycode ='CMR';
#select * from city where countrycode = 'GRC';
#select * from city where countrycode = 'GRC' order by population ASC;
#select * from city where countrycode = 'GRC' order by population desc;
#select * from city where countrycode = 'CMR' order by population ASC;
#select * from city where countrycode = 'CMR' order by population desc;
#select * from city where countrycode = 'GRC' order by population ASC LIMIT 3;
#select * from city where countrycode = 'GRC' order by population desc LIMIT 3;
#select name, population from city;
#select name, countrycode from city;
#select name, population from city where population > 500000;
#select * from city where countrycode = 'AUS' and population; --
#select city.name, city.population, country.name, country.continent
#	from city Join country on city.countrycode =country.code
#	where city.population  > 7000000 
#	order by population asc 
#	limit 10
#;
#select * from city where countrycode = 'NLD';
#select name from city where countrycode = 'NLD';
#select city.name
#from city join country on city.countrycode = country.code
#where country.name = 'Netherlands';

#select city.name, city.population
#from city join country on city.countrycode = country.code
#where country.name = 'Netherlands'
#order by population desc;

#select city.name , city.population, country.continent
#	from city join country on city.countrycode = country.code
#	where country.name = 'Netherlands'
#	order by population desc;
    
#select city.name as CityName, city.population, country.continent
#	from city join country on city.countrycode = country.code
#	where country.name = 'Netherlands'
#	order by population desc;

#select name, population, district from city where name = 'rotterdam';
#select name from country where continent = 'North America';
#select name, surfacearea from country order by surfacearea desc limit 10; 
#select name, population from city order by population desc limit 10; 
#select name, population from country 
#	where name like 'P%'
#	order by population desc limit 3;

#select sum(population), continent from country  where continent = 'ASIA';
#select sum(population), continent from country where continent = 'AFRICA';
#select sum(population),  countrycode from city where countrycode = 'CMR';
#select country.name, countrylanguage.language
#	from countrylanguage join country on country.code = countrylanguage.countrycode
#	where country.region = 'South America'; 
 
#select countrylanguage.language
#	from countrylanguage join country on country.code = countrylanguage.countrycode
#	where country.region = 'South America'
#   group by countrylanguage.language asc;
    
select city.name, countrylanguage.language
	from countrylanguage join city.name on country.code = countrylanguage.countrycode 
	where city.name = 'Barcelona';

