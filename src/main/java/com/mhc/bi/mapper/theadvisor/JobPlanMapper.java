package com.mhc.bi.mapper.theadvisor;

import com.mhc.bi.domain.theadvisor.JobPlan;
import org.apache.ibatis.annotations.*;

import java.util.List;

/**
 * @author baiyan
 * @date 2018/09/14
 * @description
*/
public interface JobPlanMapper {
    @Insert("insert into jobplan(name,input,execute_rate,execute_time,output,paraments,gmt_create,shellname) values(#{jobPlan.name},#{jobPlan.input},#{jobPlan.executeRate},#{jobPlan.executeTime},#{jobPlan.output},#{jobPlan.paraments},#{createTime},#{jobPlan.shellName})")
    @Options(useGeneratedKeys = true, keyProperty = "id", keyColumn = "id")
    int insertIntoJobPlan(@Param("jobPlan") JobPlan jobPlan, @Param("createTime") String creatTime);

    @Select("select * from jobplan")
    @Results({
            @Result(column = "id", property = "id"),
            @Result(column = "name", property = "name"),
            @Result(column = "input", property = "input"),
            @Result(column = "execute_rate", property = "executeRate"),
            @Result(column = "execute_time", property = "executeTime"),
            @Result(column = "output", property = "output"),
            @Result(column = "paraments", property = "paraments"),
            @Result(column = "gmt_create", property = "gmtCreate"),
            @Result(column = "gmt_modify", property = "gmtModify")
    })
    List<JobPlan> getAll();

    @Delete("delete from jobplan where name=#{name}")
    int delete(String name);

    @Update("update jobplan set  input=#{input},execute_rate=#{executeRate},execute_time=#{executeTime},output=#{output},paraments=#{paraments},gmt_create=#{gmtCreate}, gmt_modify=#{gmtModify}where name=#{name}")
    int update(JobPlan jobplan);

    @Select("select * from jobplan where name=#{name}")
    @Results({
            @Result(column = "id", property = "id"),
            @Result(column = "name", property = "name"),
            @Result(column = "input", property = "input"),
            @Result(column = "execute_rate", property = "executeRate"),
            @Result(column = "execute_time", property = "executeTime"),
            @Result(column = "output", property = "output"),
            @Result(column = "paraments", property = "paraments"),
            @Result(column = "gmt_create", property = "gmtCreate"),
            @Result(column = "gmt_modify", property = "gmtModify")
    })
    JobPlan selectJobPlan(String name);

    @Select("select * from jobplan where output=#{output}")
    @Results({
            @Result(column = "id", property = "id"),
            @Result(column = "name", property = "name"),
            @Result(column = "input", property = "input"),
            @Result(column = "execute_rate", property = "executeRate"),
            @Result(column = "execute_time", property = "executeTime"),
            @Result(column = "output", property = "output"),
            @Result(column = "paraments", property = "paraments"),
            @Result(column = "gmt_create", property = "gmtCreate"),
            @Result(column = "gmt_modify", property = "gmtModify")
    })
    JobPlan selectJobPlanByOutput(String output);



}